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
  @Output() toggleSubMenu = new EventEmitter<boolean>();

  constructor() {
    this.listItems = [<ListItem>{ title: 'All assets', textLeft: '04-04-2021', textRight: 'System' }];
  }

  ngOnInit() {}

  toggle(value: boolean) {
    console.log('toggle');
    value = !value;
    this.toggleSubMenu.emit(value);
    console.log(value);
    // this.inner.nativeElement.classList.remove('submenu__inner--expanded');
    // if (showsubmenu = true) {
    //   showsubmenu = !showsubmenu;

    //   // this.inner
    //   // this.ref.detectChanges();
    // }
    // if (this.inner.nativeElement.classList.contains('submenu__inner--expanded')) {
    //   console.log(this.inner.nativeElement, "expanded");
    //   this.inner.nativeElement.classList.remove('submenu__inner--expanded');
    //   this.inner.nativeElement.classList.add('submenu__inner--collapsed');
    //   console.log(this.inner.nativeElement, "expanded AFTER");
    // } else {
    //   console.log(this.inner.nativeElement, "NOT expanded");
    // }
  }
}
