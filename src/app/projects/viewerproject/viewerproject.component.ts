import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styles: []
})
export class ViewerprojectComponent implements OnInit {
  public projectid = '';
  public projects = environment.projects;
  constructor(activateRoute: ActivatedRoute) {
    this.projectid = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
