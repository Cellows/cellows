import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { ListItem } from '../../list/list-item/list-item';

@Component({
  selector: 'cel-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  collapsed = false;
  @Output() toggleEvent = new EventEmitter<boolean>();
  listItems: ListItem[];

  constructor(
    private renderer: Renderer2,
    private elementref: ElementRef
  ) {
    this.listItems = [<ListItem>{ title: 'All assets', textLeft: '04-04-2021', textRight: 'System' }];
  }

  ngOnInit() {
    this.toggleEvent.emit(this.collapsed);
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
