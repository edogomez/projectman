import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/projects.service';
import { Project } from 'src/app/projects/models/project.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public projects: Project[];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
  }

}
