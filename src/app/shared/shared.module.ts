import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL = [MatTableModule];

const THIRD_PART_MODULES = [HttpClientModule, ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...THIRD_PART_MODULES],
  exports: [...MATERIAL, ...THIRD_PART_MODULES],
})
export class SharedModule {}
