import { Component } from '@angular/core';
import { Category, CategoryService } from '../Services/Category/category.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  newCategory: Category = {
    id: 0,
    title: '',
    image: '',
    description: '',
    available: true,
  };

  // Indicate whether we are in 'Edit' mode
  isEditMode: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check if we are in edit mode (by the presence of an 'id' in the route params)
    const categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    if (categoryId) {
      this.isEditMode = true;
      this.loadCategory(Number(categoryId));
    }
  }

  // Load category data for editing
  loadCategory(id: number): void {
    this.categoryService.getCategoryById(id).subscribe((category) => {
      this.newCategory = category; // Populate the form with the existing category data
    });
  }

  // Save new category or update existing category
  saveCategory(): void {
    if (this.isEditMode) {
      this.updateCategory();
    } else {
      this.addCategory();
    }
  }

  // Add a new category
  addCategory(): void {
    this.categoryService.addCategory(this.newCategory).subscribe(() => {
      alert('Catégorie ajoutée avec succès!');
      this.resetForm();
    });
  }

  // Update an existing category
  updateCategory(): void {
    this.categoryService.updateCategory(this.newCategory).subscribe(() => {
      alert('Catégorie mise à jour avec succès!');
      this.router.navigate(['/category']); // Navigate back to the categories list after update
    });
  }

  // Reset the form after submission
  resetForm(): void {
    this.newCategory = {
      id: 0,
      title: '',
      image: '',
      description: '',
      available: false,
    };
  }
}