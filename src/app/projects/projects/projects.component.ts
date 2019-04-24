import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from 'src/app/core/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public filteredvalues: Project[];
  public filter: string;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
    this.filteredvalues = this.projects;
  }
  public onFilter(text: string) {

    this.filteredvalues = this.projects.filter(t => t.name.indexOf(text) >= 0);
    this.filter = text;
  }
}
