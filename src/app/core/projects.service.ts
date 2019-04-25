import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../projects/models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: Project[] = [];
  private urlapi = 'https://api-base.herokuapp.com/api/pub/projects';
  public projects$: Observable<any>;
  constructor(private httpClient: HttpClient) {
    this.projects$ = this.httpClient.get(this.urlapi).pipe(share()).pipe(map(this.formatData));

  }

  public formatData(data){
    if (data === null) {
      return [];
    } else {
      return data;
    }
  }

  public addProject(project: Project){

    this.httpClient.post(this.urlapi, project).subscribe();
    // this.projects.push(project);
  }
  public getProject(id: number): Project {
    return this.projects[id];
  }

}
