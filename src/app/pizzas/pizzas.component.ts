import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-pizzas',
  standalone: true,
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements AfterViewInit {

  detallesVisibles = {
    margarita: false,
    pepperoni: false,
    vegetariana: false
  };

  ngAfterViewInit() {
    gsap.fromTo('.card',
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: 'elastic.out(1, 0.5)' }
    );
  }

  mostrarInfo(sabor: 'margarita' | 'pepperoni' | 'vegetariana') {
    // Oculta todos primero
    (Object.keys(this.detallesVisibles) as (keyof typeof this.detallesVisibles)[]).forEach(key => {
      this.detallesVisibles[key] = false;
    });

    // Muestra solo el seleccionado
    this.detallesVisibles[sabor] = true;

    // Animación
    gsap.fromTo(`.${sabor}-detalles`,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    );
  }
}







