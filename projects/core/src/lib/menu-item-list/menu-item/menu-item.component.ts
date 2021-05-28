import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'cel-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem!: MenuItem;
  @Output() clicked = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit(): void {}

  onClick(menuItem: MenuItem) {
    this.clicked.emit(menuItem);
  }
}
