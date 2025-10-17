import { Component } from '@angular/core';
import { PizzasComponent } from './pizzas/pizzas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PizzasComponent],
  template: `<app-pizzas></app-pizzas>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}









