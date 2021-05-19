import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuItem } from '../menu-item-list/menu-item/menu-item';


@Component({
  selector: 'cel-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  collapsed = true;
  offsetwidth: any;
  @Output() toggleEvent = new EventEmitter<boolean>();
  @Input() menuItems!: MenuItem[];
  @ViewChild ('sidenav') sidenavContainer!: ElementRef;
  // @ViewChild ('submenu') submenuContainer!: ElementRef;

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

    if (this.collapsed) {
      this.renderer.setStyle(this.sidenavContainer.nativeElement, 'width', '60px');
      this.offsetwidth = this.sidenavContainer.nativeElement.offsetWidth + 'px';

      // this.renderer.setStyle(this.submenuContainer.nativeElement, 'margin-left', this.offsetwidth);
    } else {
      this.renderer.setStyle(this.sidenavContainer.nativeElement, 'width', '100%');
      this.offsetwidth = this.sidenavContainer.nativeElement.offsetWidth + 'px';
      // this.renderer.setStyle(this.submenuContainer.nativeElement, 'margin-left', this.offsetwidth);
    }

  }
}
