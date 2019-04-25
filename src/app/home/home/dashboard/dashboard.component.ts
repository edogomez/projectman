import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/projects/models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  @Input() public projects: Project[];
  @Input() public projects$: Observable<any>;
  constructor() { }

  ngOnInit() {
  }

}
