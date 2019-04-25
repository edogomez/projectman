import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from 'src/app/core/projects.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public filteredvalues: Project[];
  public filter: string;
  public projects$: Observable<any>;
  public filteredvalues$: Observable<any>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    //this.projects$ = this.projectsService.projects$;
    this.filteredvalues$ = this.projectsService.projects$;
  }
  public onFilter(text: string) {
    this.filteredvalues$ = this.filteredvalues$.pipe(map(project => project.filter(t => t.name.indexOf(text) >= 0)));
    //this.filteredvalues = this.projects.filter(t => t.name.indexOf(text) >= 0);
    this.filter = text;
  }
}
