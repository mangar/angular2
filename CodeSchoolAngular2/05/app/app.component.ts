import { Component } from '@angular/core';
import { CarPartsComponent } from './car-parts/components/car-parts.components'
import { RacingDataService } from './car-parts/services/racing-data.services';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}} - 03</h1>
  <car-parts></car-parts>`,
  directives: [CarPartsComponent],
  providers: [RacingDataService]
})

export class AppComponent {  
  title = 'Ultra Racing';
}