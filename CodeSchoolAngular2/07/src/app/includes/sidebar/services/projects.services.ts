import { PROJECTS } from 'projects.mocks';
// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

// import { Project } from '../models/car-part';

// @Injectable()
export class ProjectsService {

  // constructor(private http: Http) { }


  getProjects() {
    return PROJECTS;
    // return this.http.get('/car-parts.json')
    //   .map(response => <CarPart[]>response.json().data);
  }
}
