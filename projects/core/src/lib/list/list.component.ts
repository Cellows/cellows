import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from './list-item/list-item';

@Component({
  selector: 'cel-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listItems!: ListItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
