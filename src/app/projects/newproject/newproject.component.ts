import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from 'src/app/core/projects.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {
  public projects: Project[];
  public project: Project;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
    this.project = {
      id: 0,
      name: ''
    };
  }
  /**
   * saveProject
   */
  /*public saveProject() {
    this.project.id = this.projects.length;
    this.projects.push({...this.project});
  }*/
  public onSaveProject(name: string){
    this.project.id = this.projects.length;
    this.project.name = name;
    this.projectsService.addProject(this.project);
  }
}
