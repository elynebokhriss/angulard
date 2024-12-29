import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreValue'
})
export class FiltreValuePipe implements PipeTransform {

  transform(values: any[], search: string): any[] {
    if (!values || !search) {
      return values; 
    }

    return values.filter(value =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    );
  }

}
