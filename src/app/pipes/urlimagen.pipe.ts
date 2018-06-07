import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlimagen'
})
export class UrlimagenPipe implements PipeTransform {

  transform(value: any, base: string): any {

    if(!value){
      return './assets/images/noimage.png';
    }

    return base+value;

  }

}
