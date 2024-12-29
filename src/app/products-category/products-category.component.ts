import { Component ,OnInit} from '@angular/core';
import { Product , ProductService } from '../Services/Product/product.service';
import { Category, CategoryService } from '../Services/Category/category.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.css',
})
export class ProductsCategoryComponent implements OnInit {
  products: Product[] = []; // Liste complète des produits
  filteredProducts: Product[] = []; // Produits après filtrage
  categories: Category[] = []; // Liste des catégories
  selectedCategoryId: number = 0; // ID de la catégorie sélectionnée

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts(); // Initial loading of products
  }

  // Charger tous les produits
  loadProducts(): void {
    if (this.selectedCategoryId === 0) {
      // Si aucune catégorie spécifique n'est sélectionnée, charger tous les produits
      this.productService.getAllProducts().subscribe((data) => {
        this.products = data;
        this.filteredProducts = data; // Initialement, tous les produits sont affichés
      });
    } else {
      // Charger les produits filtrés par la catégorie sélectionnée
      this.productService.getProductsByCategoryId(this.selectedCategoryId).subscribe((data) => {
        this.filteredProducts = data;
      });
    }
  }

  // Charger toutes les catégories
  loadCategories(): void {
    this.categoryService.getAllCategoriesFromBackend().subscribe((data) => {
      this.categories = data;
    });
  }

  // Filtrer les produits selon la catégorie sélectionnée
  onCategoryChange(): void {
    this.loadProducts(); // Recharger les produits chaque fois qu'une catégorie est sélectionnée
  }
}