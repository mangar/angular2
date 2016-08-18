import { Component } from '@angular/core';
import { Project } from './models/project';
import { ProjectsService } from './services/projects.services';

@Component({
  selector: 'Sidebar',
  moduleId: __moduleName,
  templateUrl: 'sidebar.component.html'
})

export class Sidebar {
  projects : Project[] = [];

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
      this.projectsService.getProjects().subscribe(projects => this.projects = projects);
  }

}
