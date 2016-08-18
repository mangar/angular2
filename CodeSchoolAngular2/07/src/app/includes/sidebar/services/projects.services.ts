import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { BasicServices } from ''../../../extra/basic.services'
import { Project } from './models/project';


@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  getProjects() {
    return this.http.get('/json/projects.json').map(response => <Project[]>response.json().data);
  }
}
