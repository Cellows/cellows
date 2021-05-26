import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { MenuItem } from '../menu-item-list/menu-item/menu-item';
import { SubMenuComponent } from './sub-menu/sub-menu.component';


@Component({
  selector: 'cel-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  collapsed = true;
  @Output() toggleEvent = new EventEmitter<boolean>();
  @Input() menuItems!: MenuItem[];

  constructor(
    private renderer: Renderer2,
    private elementref: ElementRef
  ) { }

  ngOnInit() {
    this.toggleEvent.emit(this.collapsed);
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this.toggleEvent.emit(this.collapsed);
  }
}

