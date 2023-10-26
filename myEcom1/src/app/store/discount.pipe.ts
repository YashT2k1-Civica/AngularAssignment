import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'discount',
})
export class ReversePipe implements PipeTransform {

   token : any = localStorage.getItem('discount');

  transform(value: any) {

    let result = value - (value * parseInt(this.token)) / 100;

    return result;
  }
}
