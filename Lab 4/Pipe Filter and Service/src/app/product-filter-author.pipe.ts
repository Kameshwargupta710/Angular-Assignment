import { Pipe, PipeTransform } from '@angular/core';
import { DataStruct } from './DataStruct';

@Pipe({
  name: 'productFilterAuthor'
})
export class ProductFilterPipeAuthor implements PipeTransform {
    transform(value:DataStruct[],args:string):DataStruct[]
      {
        let filter:string = args ? args.toLocaleLowerCase():null;
        return filter?value.filter(
            (product:DataStruct)=>
            {return product.bookAuther.toLocaleLowerCase().indexOf(filter)!=-1}
        ):value;

    }
  }