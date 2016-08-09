import { Component } from '@angular/core';
import { CarPart } from  "./car-parts/models/car-part";
import { CARPARTS } from "./car-parts/models/car-parts-mocks";

@Component({
  selector: 'car-parts',
  templateUrl: "app/car-parts.components.html",
  styleUrls: ["app/car-parts.components.css"]
})

export class CarPartsComponent {  

  carParts : CarPart[] = [];

  ngOnInit() {
      this.carParts = CARPARTS;
  }

  totalCarParts() {
    let sum = 0;
    for (let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
  }

}
