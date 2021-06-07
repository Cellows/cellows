import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemListComponent } from './menu-item-list.component';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuItemListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule
  ],
  exports: [
    MenuItemListComponent
  ]
})
export class MenuItemListModule { }
