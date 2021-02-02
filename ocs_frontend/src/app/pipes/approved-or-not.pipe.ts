import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approvedOrNot'
})
export class ApprovedOrNotPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? "Approved" : "Not Approved";
  }

}
