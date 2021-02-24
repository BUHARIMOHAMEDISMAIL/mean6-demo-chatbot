import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'formatPlateCount'})
export class FormatPlateCountPipe implements PipeTransform {
  transform(value: number): number {
      let message;
      if(value > 10) {
        message = 'Plate Count is greater than 5'
      } else {
          message = 'Plate count is less than 5'
      }
    return message;
  }
}
