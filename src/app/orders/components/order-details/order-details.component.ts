import { Observable, switchMap } from 'rxjs';
import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../utils/order.interface';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  orderDetails$: Observable<Order | undefined> = this.route.paramMap.pipe(
    switchMap((params) =>
      this.orderService.getOrderById(+(params.get('id') as string))
    )
  );
}
