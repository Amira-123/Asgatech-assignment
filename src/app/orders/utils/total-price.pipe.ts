import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/products/utils/Products';

@Pipe({
  name: 'totalPrice',
})
export class TotalPricePipe implements PipeTransform {
  transform(prods: Product[]): number {
    return prods.reduce(
      (acc: number, prod) =>
        acc + prod.ProductPrice * (prod.Quantity as number),
      0
    );
  }
}
