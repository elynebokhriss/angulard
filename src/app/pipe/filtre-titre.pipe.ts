import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from '../models/categorie';
@Pipe({
  name: 'filtreTitre'
})
export class FiltreTitrePipe implements PipeTransform {

  transform(categories: Categorie[], search: string): Categorie[] {
    if (!categories || !search) {
      return categories;
    }
    
    return categories.filter(categorie => 
      categorie.title.toLowerCase().includes(search.toLowerCase())
    );
  }

}
