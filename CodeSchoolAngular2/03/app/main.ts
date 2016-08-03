import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}} - 02</h1>
  <p>There are {{totalCarParts()}} car parts.</p>
  <ul>
    <li *ngFor="let carPart of carParts">
      <h2>{{carPart.name | uppercase}}</h2>
      <p>{{carPart.description}}</p>
      <p>{{carPart.price | currency:'BRL':true:'1.2-2'}}</p>
      <p *ngIf="carPart.inStock > 0">Quantidade em estoque: {{carPart.inStock}}</p>
      <p *ngIf="carPart.inStock === 0"><b>out of stock</b></p>
     </li>
  </ul>
  `
})
class AppComponent {  
  title = 'Ultra Racing';

  carParts = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "price": 50,
    "inStock": 5
  },
  {
    "id": 2,
    "name": "Aerofolio",
    "description": "These tires are the very best",
    "price": 5,
    "inStock": 0
  },
  {
    "id": 3,
    "name": "Farol de Milha",
    "description": "These tires are the very best",
    "price": 12,
    "inStock": 2
  },
  {
    "id": 4,
    "name": "Maçaneta",
    "description": "These tires are the very best",
    "price": 14,
    "inStock": 0
  },
  {
    "id": 5,
    "name": "Filtro de Óleo da Primária",
    "description": "These tires are the very best",
    "price": 40,
    "inStock": 4
  },  
  ];
  totalCarParts() {
    let sum = 0;
    for (let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
  }

}

bootstrap(AppComponent);