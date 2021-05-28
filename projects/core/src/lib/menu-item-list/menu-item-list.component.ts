import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from './menu-item/menu-item';

@Component({
  selector: 'cel-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.scss']
})
export class MenuItemListComponent implements OnInit {
  @Input() menuItems!: MenuItem[];
  @Output() activatedMenuItem = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit(): void { }

  activate(menuItem: MenuItem) {
    this.activatedMenuItem.emit(menuItem);
  }
}
