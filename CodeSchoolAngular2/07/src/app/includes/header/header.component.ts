import { Component } from '@angular/core';

import { Sidebar } from '../sidebar/sidebar.component';

@Component({
  selector: 'Header',
  moduleId: __moduleName,
  templateUrl: 'header.component.html',
  directives: [Sidebar]
})
export class Header {}
