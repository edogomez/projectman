import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {
  @Input() public projectName: string;
  @Output() public saveProject = new EventEmitter<Project>();
  @Input() public projectId: number;
  constructor() { }

  ngOnInit() {
  }
  sendProject() {
    this.saveProject.emit({id: this.projectId, name: this.projectName});
  }
}
