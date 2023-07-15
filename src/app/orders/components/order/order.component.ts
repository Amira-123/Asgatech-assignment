import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(private orderService: OrderService, private route: Router) {}
  dataSource = this.orderService.orderList$;

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'OrderId',
    'PaymentType',
    'OrderDate',
    'TotalPrice',
  ];
}
