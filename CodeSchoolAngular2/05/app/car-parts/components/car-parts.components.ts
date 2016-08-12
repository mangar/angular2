import { Component } from '@angular/core';
import { CarPart } from  "../models/car-part";
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
      // this.carParts = this.racingDataService.getCarParts();
      this.racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
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
    if (Array.isArray(this.carParts)) {
      for (let carPart of this.carParts) {
        sum += carPart.inStock;
      }
    }
    return sum;
  }

}
