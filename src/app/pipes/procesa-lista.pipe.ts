import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'procesaLista'
})
export class ProcesaListaPipe implements PipeTransform {

  transform(value: any): any {
    
    let items = [];
      
    for (let item in value){

      items.push(item);
    }
    
    return items;
  }

}
