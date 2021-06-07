import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ListItem } from '../../list/list-item/list-item';

@Component({
  selector: 'cel-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  collapsed = true;
  listItems: ListItem[];
  @Input('showSubMenu') showSubMenu!: boolean;
  @Input('title') title!: string;
  @Output() toggleSubMenu = new EventEmitter<boolean>();

  constructor() {
    this.listItems = [<ListItem>{ title: 'All assets', textLeft: '04-04-2021', textRight: 'System' }];
  }

  ngOnInit() {}

  toggle(value: boolean) {
    value = !value;
    this.toggleSubMenu.emit(value);
  }
}
