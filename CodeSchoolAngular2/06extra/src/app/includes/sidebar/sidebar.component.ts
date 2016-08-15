import {Component} from '@angular/core';

import '../../../js/sidebar.component.js';


@Component({
  selector: 'Sidebar',
  moduleId: __moduleName,
  templateUrl: 'sidebar.component.html'
})
export class Sidebar {


  startSidebar() {
    sidebar();
  }


}
