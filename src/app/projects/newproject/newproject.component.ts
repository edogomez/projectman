import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {
  public projects = environment.projects;
  public project: Project;
  constructor() { }

  ngOnInit() {
    this.project = {
      id: 0,
      name: ''
    };
  }
  /**
   * saveProject
   */
  public saveProject() {
    this.project.id = this.projects.length;
    this.projects.push({...this.project});
  }
}
