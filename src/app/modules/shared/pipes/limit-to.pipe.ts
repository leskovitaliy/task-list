import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(input: any, limit: number, begin?: number): any {
    begin = (!begin || isNaN(begin)) ? 0 : begin;
    begin = (begin < 0) ? Math.max(0, input.length + begin) : begin;

    return input.slice(begin, limit);
  }

}
