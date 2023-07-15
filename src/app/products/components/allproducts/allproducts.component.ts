import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../utils/Products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],
})
export class AllproductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  allProducts$: Observable<Product[]> = this.productService.productList$;

  ngOnInit(): void {
    // this.getAllProducts()
  }

  addToCart(event: any) {}

  updateProduct(product: Product): void {
    this.productService.updateProduct(product);
    // TODO: send the updated prod form product childe to update product in the service
  }
}
