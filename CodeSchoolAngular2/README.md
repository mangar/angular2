


# Introduction

## Angular1 X Angular2

- Speed
- Components (instead of controllers and scope)
- Simpler Directives
- Intuitive Data Binding


## 


- - - 



# 01 - A Basic Component

- decorator declared before the class
- has a template




# 02 - Structural Directives, Pipes & Methods

- add dynamic behaviour to HTML
- *ngFor, *ngIf == structural directives
- pipes currency, decimal, date, json....




# 03 - Code Organization & Data Models

- refactoring
-- main.ts: bootstrap the app
-- export the class
-- directives: []


- html and css
-- templateUrl: ""
-- styleUrls: []


- models & mocks
-- 


# 04 - Data Binding

- Property and Class binding  (JS to HTML)
-- property binding (<img [src]="carPart.image" [alt]="carPart.name">)
-- class binding ([class.featured]="carPart.featured")


- Event Binding (HTML to JS)
-- (click)="cancelPayment(cart)"


- Two Way
-- <input class="number" type="text" [value]="carPart.quantity" (input)="carPart.quantity = $event.target.value" >

-- ngModel [()]
-- <input class="number" type="text" [(ngModel)]="carPart.quantity" >


# 05 - Services & HTTP





- - - 





