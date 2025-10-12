import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements AfterViewInit {

  mostrarMargarita = false;
  mostrarPepperoni = false;
  mostrarHawaiana = false;

  ngAfterViewInit() {
    // Animación inicial de las tarjetas
    gsap.fromTo('#margarita',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo('#pepperoni',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );
    gsap.fromTo('#hawaiana',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
    );
  }

  toggleDetalles(pizza: 'margarita' | 'pepperoni' | 'hawaiana') {
    // Cierra todas primero
    this.mostrarMargarita = false;
    this.mostrarPepperoni = false;
    this.mostrarHawaiana = false;

    // Abre la seleccionada
    if (pizza === 'margarita') this.mostrarMargarita = true;
    if (pizza === 'pepperoni') this.mostrarPepperoni = true;
    if (pizza === 'hawaiana') this.mostrarHawaiana = true;

    // Animación GSAP
    let selector = `.${pizza}-detalles`;
    gsap.fromTo(selector, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 });
  }
}


