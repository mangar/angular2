import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { CarPartsComponent } from './car-parts/components/car-parts.components'
import { RacingDataService } from './car-parts/services/racing-data.services';



@Component({
  selector: 'my-app',
  template: `<h1>{{title}} - 03</h1>
  <car-parts></car-parts>`,
  directives: [CarPartsComponent],
  providers: [RacingDataService, HTTP_PROVIDERS]
})

export class AppComponent {  
  title = 'Ultra Racing';
}