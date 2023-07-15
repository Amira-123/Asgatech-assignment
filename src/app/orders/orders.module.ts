import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderComponent } from './components/order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { TotalPricePipe } from './utils/total-price.pipe';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [OrderComponent, TotalPricePipe, OrderDetailsComponent],
  imports: [CommonModule, OrdersRoutingModule, HttpClientModule, SharedModule],
})
export class OrdersModule {}
