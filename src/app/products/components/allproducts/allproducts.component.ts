import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../utils/Products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent  implements OnInit{
  constructor(private productService:ProductService){
   
  }
  ngOnInit(): void {
    // this.getAllProducts()
  }
  allProducts$=this.productService.getAllProducts()
  // getAllProducts(){
  //   this.productService.getAllProducts().subscribe({
  //     next:(res:any)=>{
  //       this.allProducts=res;
  //       console.log(res)
  //       console.log(this.allProducts)
  //     }
  //   })
  // }
  addToCart(event:any){

  }
}

