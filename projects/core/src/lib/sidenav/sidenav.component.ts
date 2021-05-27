import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from '../menu-item-list/menu-item/menu-item';


@Component({
  selector: 'cel-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  collapsed = true;
  @Input() menuItems: MenuItem[] = [];
  @Input() showSubMenu: boolean = false;
  @Output() sidenavToggled = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    this.sidenavToggled.emit(this.collapsed);
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this.sidenavToggled.emit(this.collapsed);
  }
}

