import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Animar las tarjetas con GSAP
    gsap.fromTo('.card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.3 }
    );

    // Animar los detalles al aparecer
    gsap.set('.detalles', { opacity: 0, display: 'none' });
  }

  mostrarDetalles(pizza: 'margarita' | 'pepperoni' | 'vegetariana') {
    // Ocultar todos los detalles primero
    const detalles = document.querySelectorAll('.detalles');
    detalles.forEach(d => {
      (d as HTMLElement).style.display = 'none';
      gsap.to(d, { opacity: 0, duration: 0.3 });
    });

    // Mostrar solo la pizza seleccionada
    const detalleSeleccionado = document.getElementById(`detalles-${pizza}`);
    if (detalleSeleccionado) {
      (detalleSeleccionado as HTMLElement).style.display = 'block';
      gsap.to(detalleSeleccionado, { opacity: 1, y: -10, duration: 0.5, ease: 'power3.out' });
    }
  }
}







