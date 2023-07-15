import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/utils/Products';
import { SharedService } from 'src/app/shared/services/shared.service';
import { OrderService } from '../../services/order.service';
import { Order } from '../../utils/order.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  constructor(
    private router: Router,
    private SharedService: SharedService,
    private orderService: OrderService,
    private toaster: ToastrService
  ) {}

  cartProduct: Product[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart') || '[]');
    }
    this.getTotalPrice();
  }
  getTotalPrice() {
    this.total = 0;
    for (let x in this.cartProduct) {
      this.total +=
        this.cartProduct[x].ProductPrice *
        (this.cartProduct[x].Quantity as number);
    }
  }
  onAddToCart() {
    this.getTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
  }
  minusAmount(index: number) {
    (this.cartProduct[index].Quantity as number)--;
    this.onAddToCart();
  }
  plusAmount(index: number) {
    (this.cartProduct[index].Quantity as number)++;
    this.onAddToCart();
  }
  detectChangeAmount() {
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    this.getTotalPrice();
  }
  deleteProduct(index: number) {
    this.cartProduct.splice(index, 1);
    this.onAddToCart();
    this.SharedService.getLength();
    this.toaster.warning('delete product from cart', 'warring');
  }
  clearAllCart() {
    this.cartProduct.splice(0);
    this.onAddToCart();
    this.SharedService.getLength();
  }

  onCreateOrder() {
    if (this.cartProduct.length) {
      const order: Order = {
        OrderDate: new Date(),
        OrderId: parseInt(
          `${new Date().getSeconds()}${Math.floor(Math.random() * 10000)}`
        ),
        PaymentType: 'Online',
        UserId: '1231-1244-1233',
        User: {
          Id: '1231-1244-1233',
          Name: 'Mohamed Ashraf',
          Email: 'Mohamed.Ashraf@Gmail.com',
          Phone: '01144558866',
          Address:
            '55 Mohammed Mostafa El Sayed, An Nadi Al Ahli, Nasr City, Cairo Governorate',
          RegisterDate:
            'Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)',
        },
        TotalPrice: this.total,
        Products: [...this.cartProduct],
      };

      this.orderService.createOrder({ ...order });

      this.router.navigate(['/order/', order.OrderId]);

      this.toaster.success('Order create successfully.');

      this.clearAllCart();
    }
  }
}
