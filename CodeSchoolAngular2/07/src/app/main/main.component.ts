import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Header }    from '../includes/header/header.component';
import { Counters } from './counters/counters.component';
import { ProjectsService } from '../includes/sidebar/services/projects.services';

@Component({
    selector: 'App',
    moduleId: __moduleName,
    templateUrl: 'main.component.html',
    directives: [Header, Counters],
    providers: [ProjectsService, HTTP_PROVIDERS]

})
export class Main {

}
