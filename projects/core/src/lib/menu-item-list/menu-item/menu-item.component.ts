import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'cel-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem!: MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
