import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string ="Santo"
  nombreUppercase: string ="SANTO"
  nombreCompleto: string ="Santo CarDonA"

  fecha: Date = new Date(); // Dia de hoy

}
