import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../Services/Product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements  OnInit {
  listProducts: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Fetch all products
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.listProducts = products;
        // Récupérer l'ID de la catégorie depuis l'URL
        const categoryId = Number(this.route.snapshot.paramMap.get('id'));
        // Filtrer les produits correspondant à l'ID de la catégorie
        this.filteredProducts = this.listProducts.filter(
          (product) => product.categoryId === categoryId
        );
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}