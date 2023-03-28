import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() selectedElements: number = 0;
  @Input() allElements?: number;
  constructor() { }

  ngOnInit(): void {
  }

}
