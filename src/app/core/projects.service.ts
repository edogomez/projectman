import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects = environment.projects;
  constructor() { }

  public addProject(project: Project){
    this.projects.push(project);
  }
  public getProject(id: number): Project {
    return this.projects[id];
  }

}
