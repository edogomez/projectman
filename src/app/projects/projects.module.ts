import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './viewerproject/viewerproject.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { NewProjectFormComponent } from './newproject/new-project-form/new-project-form.component';
import { ViewerProjectFormComponent } from './viewerproject/viewer-project-form/viewer-project-form.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerprojectComponent, NewprojectComponent, FilterProjectsFormComponent, ProjectsListComponent, NewProjectFormComponent, ViewerProjectFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
