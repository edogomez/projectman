import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public projects = environment.projects;
  constructor() { }

  ngOnInit() {

  }

}
