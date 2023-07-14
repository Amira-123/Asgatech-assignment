import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, map, take, tap } from 'rxjs';
import { Order } from '../utils/order.interface';
import { ProductService } from 'src/app/products/services/product.service';
import { Product } from 'src/app/products/utils/Products';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {
    this.getAllOrders().subscribe();
  }
  orderList: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  orderList$: Observable<Order[]> = this.orderList.asObservable();

  getOrderById(orderId: string): Order | undefined {
    // TODO: Find the order by id
    return this.orderList
      .getValue()
      .find((order: any) => order?.OrderId === orderId);
  }

  createOrder(order: Order): void {
    // TODO: After collecting the order details
    // TODO: Just update orderList
  }

  getAllOrders() {
    return this.http.get<Order[]>(environment.baseApi + 'orders.json').pipe(
      map((res) =>
        res.map((order) => ({
          ...order,
          Products: order.Products?.map((prod) => ({
            ...(this.productService.getProductById(prod.ProductId) as Product),
            Quantity: prod.Quantity,
          })),
          // TODO: find and get the user by UserId
        }))
      ),
      tap((res: Order[]) => this.orderList.next(res)),
      take(1)
    );
  }
}
