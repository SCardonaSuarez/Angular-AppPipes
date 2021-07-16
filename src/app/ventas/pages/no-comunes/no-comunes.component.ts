import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Alberto'
  genero: string = 'masculino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural

  clientes: string[] = ['Yamile','Santiago','Fernando', 'Carolina']
  clientesMapa={
    '=0': 'no tenemos ningun cliente esperando',
    '=1':'teneos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Santo'
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop()
  }

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  
  //key value pipe

  persona = {
    nombre: 'santiago',
    edad: 30,
    direccion: 'Medellin, Colombia'
  }

  //JsonPipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },    {
      nombre: 'Aquaman',
      vuela: false 
    },
  ]

  //Async Pipe

  miObservable = interval(5000) // 0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, rejects) =>{

      setTimeout(()=>{
        resolve('Tenemos data de promesa')
      }, 3500)
  })

}
