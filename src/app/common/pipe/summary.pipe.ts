import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit: any): (string | null) {
    console.log(value);
    if (!value) {
      return null;
    }
    if (limit) {
      return value.substr(0, limit) + ((limit >= value.length) ? '' : '...');
    }
    return value;

  }

}
