import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'startFrom'
})
export class StartFromPipe implements PipeTransform {

  transform(list: Array<any>, start?: number): Array<any> {
    return list.slice(+start);
  }

  /*transform(list: Array<any>, start?: number, end?: number): Array<any> {
    console.log('start', start);
    console.log('end', end);
    console.log('list', list);

    const endIndex = start !== 0 ? start + end : end;

    console.log('return', list.slice(+start, endIndex));

    return list.slice(+start, endIndex);
  }*/
}
