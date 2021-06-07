import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from './list-item';

@Component({
  selector: 'cel-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() listItem!: ListItem;

  constructor() { }

  ngOnInit(): void {
  }

}
