import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tel'
})
export class TelPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 8) {
      return value.substring(0, 4) + '-' + value.substring(4, 8);

    } else if (value.length === 10) {
      return `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6)}`
    } else if (value.length === 11) {
      return `(${value.substring(0, 3)}) ${value.substring(3, 7)}-${value.substring(7)}`
    }

    return value;
  }
}
