import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/products/utils/Products';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  Length: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cartLength!: any;
  getCartLength() {
    if ('cart' in localStorage) {
      this.cartLength = JSON.parse(localStorage.getItem('cart') || '[]');
      this.Length.next(this.cartLength.length);
    }
  }
  getLength() {
    this.getCartLength();
    return this.Length.asObservable();
  }
}
