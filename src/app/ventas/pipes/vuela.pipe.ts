import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name:'vuela'
})

export class VuelaPipe implements  PipeTransform{

    transform(value:boolean): string {
    
        //ternario si la bandera es true va mayuscula, si  es false emtoces es minuscula
        return(value)
            ? 'vuela'
            :'no vuela';
        
       
    }    

}