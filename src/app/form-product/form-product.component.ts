import { Component } from '@angular/core';
import { Product, ProductService } from '../Services/Product/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent {
  product: Product = {
    id: 0,
    name: '',
    image: '',
    categoryId: 0,
    description: '',
    price: 0,
    brand: '',
    promotion: 0,
  };

  constructor(private productService: ProductService) {}

  onSave(form: any): void {
    if (form.valid) {
      this.productService.addProduct(this.product).subscribe(() => {
        alert('Produit ajouté avec succès !');
        form.resetForm();
      });
    }
  }
}
