import { tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.route.paramMap
      .pipe(
        tap((params) => {
          const id = +(params.get('id') as string);
          this.orderService.getOrderById(id).subscribe(console.log);
          console.log(id);
        })
      )
      .subscribe();
  }
}
