import {Component} from '@angular/core';
import {Header} from './includes/header/header.ts';
import {Title} from './title.ts';
import {Techs} from './techs/techs.ts';
import {Footer} from './includes/footer/footer.ts';

@Component({
  selector: 'App',
  moduleId: __moduleName,
  templateUrl: 'main.html',
  directives: [Header, Title, Techs, Footer]
})
export class Main {}
