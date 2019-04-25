import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from 'src/app/core/projects.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {
  public projects$: Observable<any>;
  public project: Project;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects$ = this.projectsService.projects$;
    this.project = {
      id: 0,
      name: ''
    };
  }

  public onSaveProject(project: Project){
    this.projectsService.addProject(project);
  }
}
