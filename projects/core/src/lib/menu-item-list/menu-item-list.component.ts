import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from './menu-item/menu-item';

@Component({
  selector: 'cel-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.scss']
})
export class MenuItemListComponent implements OnInit {
  @Input() menuItems!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
