import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name:'mayusculas'
})

export class MayusculasPipe implements  PipeTransform{

    transform(value:string, bandera:boolean = true): string {
    
        //ternario si la bandera es true va mayuscula, si  es false emtoces es minuscula
        return(bandera)
            ? value.toUpperCase()
            :value.toLowerCase();
        
       
    }    

}