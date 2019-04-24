import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/core/projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styles: []
})
export class ViewerprojectComponent implements OnInit {
  public projectid: number;
  public projects: Project[];
  public project: Project;
  constructor(activateRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.projectid = Number(activateRoute.snapshot.params['id']);
    this.project = this.projectsService.getProject(this.projectid);
  }

  ngOnInit() {
  }

}
