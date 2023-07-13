import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

const material=[
 MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    material
  ]
})
export class SharedModule { }
