import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOrderVm } from '../utils/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getAllOrders(){
     return this.http.get<IOrderVm[]>(environment.baseApi+'orders.json')
  }
}
