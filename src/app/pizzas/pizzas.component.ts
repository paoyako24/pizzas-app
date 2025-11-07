import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-pizzas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {

  // Estados de visibilidad para los detalles
  detallesVisibles = {
    pepperoni: false,
    vegetariana: false
  };

  // Animación con GSAP al cargar el componente
  ngAfterViewInit() {
    gsap.from('.pizza-card', { opacity: 0, y: 40, duration: 1, stagger: 0.3, ease: 'power2.out' });
  }

  // Función para alternar la visibilidad de los detalles
mostrarDetalles(tipo: keyof typeof this.detallesVisibles) {
  this.detallesVisibles[tipo] = !this.detallesVisibles[tipo];
}
}









