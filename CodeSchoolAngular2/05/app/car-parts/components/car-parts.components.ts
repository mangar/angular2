import { Component } from '@angular/core';
import { CarPart } from  "../models/car-part";
import { CARPARTS } from "../models/car-parts-mocks";
import { RacingDataService } from "../services/racing-data.services";

@Component({
  selector: 'car-parts',
  templateUrl: "app/car-parts/car-parts.components.html",
  styleUrls: ["app/car-parts/car-parts.components.css"]
})

export class CarPartsComponent {  

  constructor(private racingDataService: RacingDataService) {

  }

  carParts : CarPart[] = [];

  ngOnInit() {
      // this.carParts = CARPARTS;
      this.carParts = this.racingDataService.getCarParts();
  }

  upQuantity(carPart: CarPart) {
    if (carPart.quantity < carPart.inStock) {
      carPart.quantity++;
    }
  }

  downQuantity(carPart: CarPart) {
   if (carPart.quantity > 0) {
      carPart.quantity--;
    } 
  }


  totalCarParts() {
    let sum = 0;
    for (let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
  }

}
