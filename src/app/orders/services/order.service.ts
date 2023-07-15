import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../utils/order.interface';
import { ProductService } from 'src/app/products/services/product.service';
import { Product } from 'src/app/products/utils/Products';
import { User } from '../utils/user.interface';
import { concatMap, filter, map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {
    // this.getAllUsers().subscribe();
    this.getAllOrders().subscribe();
  }
  // users: any = [];
  orderList: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  orderList$: Observable<Order[]> = this.orderList.asObservable();

  getOrderById(orderId: number): Observable<Order | undefined> {
    return this.orderList$.pipe(
      map((res: Order[]) => {
        return res.find((order: Order) => order?.OrderId == orderId);
      })
    );
  }

  createOrder(order: Order): void {
    this.orderList.next([order, ...this.orderList.getValue()]);
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
          // user: this.users.find((u: any) => u.Id === order?.UserId),
        }))
      ),
      concatMap((orders: Order[]) => {
        return this.getAllUsers().pipe(
          map((users: User[]) =>
            orders.map((order: Order) => ({
              ...order,
              User: users.find((u: any) => u.Id === order?.UserId),
            }))
          )
        );
      }),
      tap((res: Order[]) => this.orderList.next(res)),
      take(1)
    );
  }
  getAllUsers() {
    return this.http.get<User[]>(environment.baseApi + 'users.json');
  }
}
