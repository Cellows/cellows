import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../../list/list-item/list-item';

@Component({
  selector: 'cel-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  collapsed = false;
  listItems: ListItem[];

  constructor() {
    this.listItems = [<ListItem>{ title: 'All assets', textLeft: '04-04-2021', textRight: 'System' }];
  }

  ngOnInit() {}

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
