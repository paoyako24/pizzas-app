import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent   // Declaramos nuestro componente de pizzas
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Arrancamos la aplicación desde AppComponent
})
export class AppModule { }



