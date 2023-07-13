import { Component, Input } from '@angular/core';
import { Product } from '../../utils/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data!:Product
  addItem(){

  }
}
