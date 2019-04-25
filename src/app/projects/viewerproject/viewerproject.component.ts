import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/core/projects.service';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styles: []
})
export class ViewerprojectComponent implements OnInit {
  public projectid: number;
  public projects$: Observable<any>;

  constructor(activateRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.projectid = Number(activateRoute.snapshot.params['id']);
    this.projects$ = this.projectsService.projects$.pipe(map(projects => projects.filter(t => t.id === this.projectid)));;
    //this.project = this.projectsService.getProject(this.projectid);
  }

  ngOnInit() {
  }

}
