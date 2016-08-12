import { CARPARTS } from '../models/car-parts-mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CarPart } from '../models/car-part';

@Injectable()
export class RacingDataService {

  constructor(private http: Http) { }


  getCarParts() {
    // return CARPARTS;
    return this.http.get('/car-parts.json')
      .map(response => <CarPart[]>response.json().data);
  }
}
