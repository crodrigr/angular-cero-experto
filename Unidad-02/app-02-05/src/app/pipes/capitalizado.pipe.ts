import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
  standalone: true
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split(' ')
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
      .join(' ');
  }
}
