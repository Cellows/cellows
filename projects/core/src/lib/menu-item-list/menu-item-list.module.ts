import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemListComponent } from './menu-item-list.component';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuItemListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuItemListComponent
  ]
})
export class MenuItemListModule { }
