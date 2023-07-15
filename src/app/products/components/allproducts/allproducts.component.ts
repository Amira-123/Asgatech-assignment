import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../utils/Products';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],
})
export class AllproductsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private sharedService: SharedService,
    private toaster: ToastrService
  ) {}

  allProducts$: Observable<Product[]> = this.productService.productList$;
  cartProduct: Product[] = [];

  ngOnInit(): void {}

  updateProduct(product: Product): void {
    this.productService.updateProduct(product);
  }
  addToCart(prod: Product) {
    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart') || '[]');
      let exist = this.cartProduct.find(
        (item) => item.ProductId == prod.ProductId
      );
      if (exist) {
        this.toaster.error('this product is already in your cart!', 'Warring!');
      } else {
        this.cartProduct.push(prod);
        localStorage.setItem('cart', JSON.stringify(this.cartProduct));
        this.toaster.success('this product is added in your cart!', 'success!');
      }
    } else {
      this.cartProduct.push(prod);
      localStorage.setItem('cart', JSON.stringify(this.cartProduct));
      this.toaster.success('this product is added in your cart!', 'success!');
    }

    this.sharedService.getLength();
  }
}
