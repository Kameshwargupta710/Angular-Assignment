import { Pipe, PipeTransform } from '@angular/core';
import { DataStruct } from './DataStruct';

@Pipe({
  name: 'productFilterYear'
})
export class ProductFilterPipeYear implements PipeTransform {
  transform(value: DataStruct[], args: string): DataStruct[] {
    //for (var i = 0; i < 4; i++) {
      let filter: string = args ? args.toLocaleLowerCase() : null;
      return filter ? value.filter(
        (product: DataStruct) =>
        { return product.yearOfpublish.toString().toLowerCase().indexOf(filter) != -1 }
      ) : value;
    //}
  }
}