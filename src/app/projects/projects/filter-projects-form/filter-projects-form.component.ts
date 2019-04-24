import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styles: []
})
export class FilterProjectsFormComponent implements OnInit {
  public filtertxt: string;
  @Output() public filter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendFilter() {
    this.filter.emit(this.filtertxt);
  }
}
