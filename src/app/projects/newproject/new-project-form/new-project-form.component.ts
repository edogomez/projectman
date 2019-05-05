import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {
  @Input() public projectName: string;
  @Output() public saveProject = new EventEmitter<Project>();
  @Input() public projectId: number;
  public formNewGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  sendProject() {
    this.saveProject.emit({ id: this.projectId, name: this.formNewGroup.value.projectName});
  }
  private buildForm() {
    this.formNewGroup = this.formBuilder.group({
      projectName: ''
    });
  }
}
