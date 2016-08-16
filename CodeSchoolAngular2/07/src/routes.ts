/// <reference path="../typings/index.d.ts"/>

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouterConfig } from '@angular/router';
import { Main } from './app/main/main.component.ts';
import { Projects } from './app/projects/projects.component.ts';

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
export class Root {
}

export const routes: RouterConfig = [
  { path: '', component: Main },
  { path: 'projects', component: Projects }
];
