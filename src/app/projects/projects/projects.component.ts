import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from 'src/app/core/projects.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filteredvalues$ = this.projectsService.projects$;

  }
  public onFilter(text: string) {
    this.filteredvalues$ = this.filteredvalues$.pipe(map(project => project.filter(t => t.name.indexOf(text) >= 0)));
    this.filter = text;
  }

}
