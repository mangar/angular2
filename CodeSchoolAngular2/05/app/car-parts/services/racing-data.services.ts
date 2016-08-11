import { CARPARTS } from '../models/car-parts-mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class RacingDataService {
  getCarParts() {
    return CARPARTS;
  }
}
