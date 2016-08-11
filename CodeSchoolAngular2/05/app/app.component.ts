import { Component } from '@angular/core';
import { CarPartsComponent } from './car-parts/components/car-parts.components'

@Component({
  selector: 'my-app',
  template: `<h1>{{title}} - 03</h1>
  <car-parts></car-parts>`,
  directives: [CarPartsComponent]
})

export class AppComponent {  
  title = 'Ultra Racing';
}