import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: []
})
export class BasicosComponent {

  
  nombreLower: string = "danny";;
  nombreUpper: string = "DANNY";
  nombreCompleto: string = "dAnNY baRtoN";
  dateToday: Date = new Date();


}
