"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ultra Racing';
        this.carParts = [{
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
    }
    AppComponent.prototype.totalCarParts = function () {
        var sum = 0;
        for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
            var carPart = _a[_i];
            sum += carPart.inStock;
        }
        return sum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}} - 02</h1>\n  <p>There are {{totalCarParts()}} car parts.</p>\n  <ul>\n    <li *ngFor=\"let carPart of carParts\">\n      <h2>{{carPart.name | uppercase}}</h2>\n      <p>{{carPart.description}}</p>\n      <p>{{carPart.price | currency:'BRL':true:'1.2-2'}}</p>\n      <p *ngIf=\"carPart.inStock > 0\">Quantidade em estoque: {{carPart.inStock}}</p>\n      <p *ngIf=\"carPart.inStock === 0\"><b>out of stock</b></p>\n     </li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map