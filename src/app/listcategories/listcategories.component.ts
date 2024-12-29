import { Component, OnInit  } from '@angular/core';
import { Category, CategoryService } from '../Services/Category/category.service';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrl: './listcategories.component.css',
})
export class ListcategoriesComponent implements OnInit {
  categories: Category[] = [];
  titre: string = ''; // Propriété liée au champ de recherche
  
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategoriesFromBackend().subscribe((data) => {
      this.categories = data;
    });
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategoryFromBackend(id).subscribe(() => {
      this.loadCategories();
    });
  }
}
