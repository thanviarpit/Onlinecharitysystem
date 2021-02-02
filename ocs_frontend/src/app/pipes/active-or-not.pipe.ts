import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeOrNot'
})
export class ActiveOrNotPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? "Activated" : "Not Activated";
  }

}
