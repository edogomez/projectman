import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styles: []
})
export class FilterProjectsFormComponent implements OnInit {
  public filtertxt: string;
  public formGroup: FormGroup;

  @Output() public filter = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    this.buildForm();
  }
  sendFilter() {
    this.filter.emit(this.formGroup.value.filtertxt);
  }
  private buildForm(){
    this.formGroup = this.formBuilder.group({
      filtertxt:''
    });
  }
}
