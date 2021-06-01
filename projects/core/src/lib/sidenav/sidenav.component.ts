import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MenuItem } from '../menu-item-list/menu-item/menu-item';
import { SidenavMenuItem } from './sidenav-menu-item';


@Component({
  selector: 'cel-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ width: 0, opacity: 0 }),
            animate('.3s ease-out',
              style({ width: 200, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ width: 200, opacity: 1 }),
            animate('.3s ease-in',
              style({ width: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})

export class SidenavComponent implements OnInit {
  collapsed = true;
  menuItems: MenuItem[] = [];
  showSubMenu: boolean = false;
  @Input() sidenavMenuItems: SidenavMenuItem[] = [];
  @Output() sidenavToggled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.sidenavToggled.emit(this.collapsed);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'sidenavMenuItems': {
            const items = changes[propName].currentValue as SidenavMenuItem[];
            this.menuItems = items.map(x => ({ displayName: x.displayName, routePath: x.routePath } as MenuItem));
          }
        }
      }
    }
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this.sidenavToggled.emit(this.collapsed);
  }

  showHideSubMenu(menuItem: MenuItem) {
    const sidenavMenuItem = this.sidenavMenuItems.find(x => x.displayName === menuItem.displayName);
    this.showSubMenu = sidenavMenuItem?.showSubMenu || false;
  }

  toggleSub(value: boolean) {
    this.showSubMenu = value;
    console.log(this.showSubMenu);
  }
}

