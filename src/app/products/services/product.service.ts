import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Product } from '../utils/Products';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { Order } from 'src/app/orders/utils/order.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {
    this.getAllProducts().subscribe();
  }

  productList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  productList$: Observable<Product[]> = this.productList.asObservable();

  getProductById(productId: string): Product | undefined {
    return this.productList
      .getValue()
      .find((prod) => prod?.ProductId === productId);
  }

  updateProduct(prod: Product): void {
    // TODO: loop trow productList subject value and find selected product
    const productList: Product[] = this.productList
      .getValue()
      .map((product) => {
        if (prod.ProductId === product.ProductId) {
          return prod;
        }
        return product;
      });

    // TODO: set the list again
    this.productList.next(productList);
  }

  getAllProducts() {
    return this.http.get<Product[]>(environment.baseApi + 'products.json').pipe(
      tap((res: Product[]) => this.productList.next(res)),
      take(1)
    );
  }
}
