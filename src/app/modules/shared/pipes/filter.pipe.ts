import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText?: string, itemsAll?: any): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    if (itemsAll && itemsAll.length) {
      // search by all items without pagination
      return itemsAll.filter(item => {
        return item.header.toLowerCase().includes(searchText);
      });
    } else {
      return items.filter(item => {
        return item.header.toLowerCase().includes(searchText);
      });
    }
  }

}
