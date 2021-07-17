import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'vuela'
})
export class vuelaPipe implements PipeTransform{

    transform(valor: boolean, ):string{
        console.log(valor);
        return (valor) ? 'vuela' : 'no vuela'
        
    }

}