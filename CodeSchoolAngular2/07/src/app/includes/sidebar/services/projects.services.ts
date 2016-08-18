import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.mocks';
// import { Project } from './models/project';

@Injectable()
export class ProjectsService {

  getProjects() {
    return PROJECTS;
  }
}
