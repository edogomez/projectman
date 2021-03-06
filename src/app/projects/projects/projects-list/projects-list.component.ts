import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {
  @Input() public projects: Project[] = [] ;
  @Input() public filteredvalues: Project[] = [];
  @Input() public filteredvalues$: Observable<any>;
  @Input() public filter;
  constructor() { }

  ngOnInit() {
  }

}
