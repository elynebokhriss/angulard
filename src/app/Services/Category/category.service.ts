import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Category {
  id!: number;
  title!: string;
  image!: string;
  description!: string;
  available!: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les catégories
  getAllCategoriesFromBackend(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  // Ajouter une catégorie
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  // Supprimer une catégorie
  deleteCategoryFromBackend(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Récupérer une catégorie par son ID
  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour une catégorie
  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${this.apiUrl}/${category.id}`,
      category
    );
  }
}
