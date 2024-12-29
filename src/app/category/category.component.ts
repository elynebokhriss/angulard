import { Component, OnInit  } from '@angular/core';
import { Category, CategoryService } from '../Services/Category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
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

  // Supprimer une catégorie
  deleteCategory(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      this.categoryService.deleteCategoryFromBackend(id).subscribe(() => {
        alert('Catégorie supprimée avec succès!');
        this.loadCategories(); // Recharger la liste des catégories après suppression
      }, (error) => {
        console.error('Erreur lors de la suppression de la catégorie:', error);
      });
    }
  }
}
