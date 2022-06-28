import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: []
})
export class NoComunesComponent {
    //i18nSelect
    nombre: string = 'Susana';
    genero: string = 'femenino';
    i:number=0;

    invitacionMapping = {  
      'masculino': 'invitarlo',
      'femenino': 'invitarla'
    }
    //i18nPlural
    clientes: string[]= ['maria','juan','sofia'];
    clientesMap= {'=0': 'no tenemos ningun cliente esperando.',
                  '=1': 'tenemos un cliente esperando.',
                  '=2': 'tenemos dos clientes esperando.',
                  'other': 'tenemos # clientes esperando.'
                  }

    changeGender(){
      this.i=this.i+1;

      if((this.i%2)!=0){
      this.nombre="Danny";
      this.genero="masculino";
      }
      else{
        this.nombre="Susana";
        this.genero="femenino";
      } 

    }
   deleteClient(){
    console.log(this.clientes.pop());

   }

   //KeyValue Pipe
   persona={

    nombre:'Danny',
    edad: 23,
    location:'Bcn'
   }

    //Json Pipe
    heroes=[
      
      {nombre:'Danny',
      power:70},
      {nombre:'ElKid',
      power:10000}


    ]
    //Async Pipe
    miObservable = interval(1000);

    valorPromesa = new Promise((resolve, reject)=>{

      setTimeout(() => {
        resolve('Tenemos data de promesa')
      },3500);

    });
}