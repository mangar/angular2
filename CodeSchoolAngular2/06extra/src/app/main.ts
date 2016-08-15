import {Component} from '@angular/core';
import {Header} from    './includes/header/header.ts';
import {Sidebar} from   './includes/sidebar/sidebar.ts';
import {Footer} from    './includes/footer/footer.ts';
import {Counters} from  './main/counters/counters.ts';
import {Visitors} from  './main/visitors/visitors.ts';

import '../../js/custom.js';

@Component({
  selector: 'App',
  moduleId: __moduleName,
  templateUrl: 'main.html',
  directives: [Header, Counters, Sidebar, Visitors, Footer]
})
export class Main {}
