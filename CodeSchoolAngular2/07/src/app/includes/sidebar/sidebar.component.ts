import { Component } from '@angular/core';

import { PROJECTS } from './services/projects.mocks';
import { Project } from './models/project';
import { ProjectsService } from './services/projects.services';


@Component({
  selector: 'Sidebar',
  moduleId: __moduleName,
  templateUrl: 'sidebar.component.html'
})

export class Sidebar {
  projects : Project[] = PROJECTS;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
      // this.projects = PROJECTS;
      this.projects = this.projectsService.getProjects();
      // this.carParts = this.racingDataService.getCarParts();
      // this.racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
  }

}
