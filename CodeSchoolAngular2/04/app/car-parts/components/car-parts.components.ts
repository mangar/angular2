import { Component } from '@angular/core';
import { CarPart } from  "../models/car-part";
import { CARPARTS } from "../models/car-parts-mocks";

@Component({
  selector: 'car-parts',
  templateUrl: "app/car-parts/car-parts.components.html",
  styleUrls: ["app/car-parts/car-parts.components.css"]
})

export class CarPartsComponent {  

  carParts : CarPart[] = [];

  ngOnInit() {
      this.carParts = CARPARTS;
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
