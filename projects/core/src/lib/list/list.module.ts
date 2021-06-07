import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListItemComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
