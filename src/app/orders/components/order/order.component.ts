import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { IOrderVm } from '../../utils/order.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  constructor(private orderService:OrderService){}
  ngOnInit(): void {
   this.getAllOrders()
  }
  dataSource:any
  displayedColumns: string[] = ['OrderId', 'PaymentType', 'OrderDate','TotalPrice'];

  
  getAllOrders(){
    this.orderService.getAllOrders().subscribe({
      next:(res:any)=>{
        this.dataSource=res
      }
    })
  }
}
