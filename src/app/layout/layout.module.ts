import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const Components = [HeaderComponent];

@NgModule({
  declarations: [...Components],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [...Components],
})
export class LayoutModule {}
