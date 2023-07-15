import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../utils/Products';
import { FormBuilder, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(private _fb: FormBuilder) {}

  @Input() data!: Product;

  @Output() onEditProduct = new EventEmitter<Product>();

  @Output() onAddProduct = new EventEmitter<Product>();

  addButton: boolean = false;

  quantity: FormControl<number | null> = this._fb.control(null);

  amount: FormControl<number | null> = this._fb.control(1);

  showEditInput: boolean = false;

  addProduct(prod: Product) {
    this.onAddProduct.emit({
      ...this.data,
      Quantity: this.amount.value as number,
    });
  }

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
  }
}
