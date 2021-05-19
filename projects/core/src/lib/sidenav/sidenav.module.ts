import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { MenuItemListModule } from '../menu-item-list/menu-item-list.module';
import { ListModule } from '../list/list.module';

@NgModule({
  declarations: [
    SubMenuComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MenuItemListModule,
    ListModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
