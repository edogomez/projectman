import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './viewerproject/viewerproject.component';
import { NewprojectComponent } from './newproject/newproject.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'new',
    component: NewprojectComponent
  },
  {
    path: ':id',
    component: ViewerprojectComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
