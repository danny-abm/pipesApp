import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
   
  bandera:boolean=false;
  ordenarPor:string='';
  //i:number=0;
  heroe: Heroe [] = [
    {
      nombre:'flash',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'ironman',
      vuela:true,
      color:Color.rojo
    },
    {
      nombre:'batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'linterna verde',
      vuela:true,
      color:Color.verde
    }

  ]

  constructor() { }

  ngOnInit(): void {
  
  }

  changeCase(){
    
    this.bandera=!this.bandera;

    //ternario si el indice es impar bandera es true, si es par es false
   /* this.i=this.i+1;
   return((this.i%2)!=0)
            ?this.bandera=true
            :this.bandera=false;*/
  }

  sortName(valor:string){
    this.ordenarPor=valor;
  }
}
