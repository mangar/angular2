import { Component } from '@angular/core';
import { Header }    from '../includes/header/header.component';
import { Counters } from './counters/counters.component';

@Component({
    selector: 'App',
    moduleId: __moduleName,
    templateUrl: 'main.component.html',
    directives: [Header, Counters]
})
export class Main {

}
