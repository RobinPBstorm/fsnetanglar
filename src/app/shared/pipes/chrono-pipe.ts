import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono',
})
export class ChronoPipe implements PipeTransform {
  transform(value: number): string {

    let hours = Math.floor(value / 3600);
    let minutes = Math.floor((value % 3600) / 60);
    let seconds = Math.floor(value % 60);
    return hours + ' Heures ' + minutes + ' Minutes ' + seconds + ' Secondes';
  }
}
