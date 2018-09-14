import { Pipe, PipeTransform } from '@angular/core';
import { DataStruct } from './DataStruct';

@Pipe({
  name: 'productFilterId'
})
export class ProductFilterPipeId implements PipeTransform {
    transform(value:DataStruct[],args:string):DataStruct[]
      {
        let filter:string = args ? args.toLocaleLowerCase():null;
        return filter?value.filter(
            (product:DataStruct)=>
            {return product.id.toString().toLocaleLowerCase().indexOf(filter)!=-1}
        ):value;

    }
  }