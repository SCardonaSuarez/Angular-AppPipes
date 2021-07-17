import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayusculas: boolean = true

  ordenarPor:string= ''
  heroes: Heroe[] = [
    {
      nombre:'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre:'Batman',
      vuela: true,
      color: Color.negro
    },
    {
      nombre:'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre:'Darvedevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]


  cambiar(){
    this.enMayusculas = !this.enMayusculas
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor
    console.log(valor);
    
  }

}
