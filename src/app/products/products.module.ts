import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllproductsComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
