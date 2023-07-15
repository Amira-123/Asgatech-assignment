import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../utils/Products';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(private _fb: FormBuilder) {}

  @Input() data!: Product;

  @Output() onEditProduct = new EventEmitter<Product>();

  quantity: FormControl<number | null> = this._fb.control(null);

  showEditInput: boolean = false;

  addItem() {}

  onShowEdit(prod: Product): void {
    this.quantity.patchValue(prod.AvailablePieces);
    this.showEditInput = true;
  }

  onEditProd(): void {
    const updateProduct: Product = {
      ...this.data,
      AvailablePieces: this.quantity.value as number,
    };

    this.onEditProduct.emit(updateProduct);
    this.showEditInput = false;
    // TODO: create new object from product with new quantity
    // TODO: send this created object to the parent
    // TODO: Hide edit form
  }
}
