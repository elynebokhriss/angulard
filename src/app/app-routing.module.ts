import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { ProfilesComponent } from './profile/profiles/profiles.component';
import { AproposComponent } from './apropos/apropos/apropos.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ProductsComponent } from './product/products/products.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent },
  {
    path: 'products',component: ProductsComponent
  },
  { path: 'add-product', component: FormProductComponent },
  { path: 'produits', component: ProductsCategoryComponent },
  {
    path: 'contact',component: ContactComponent
  },
  {
    path: 'apropos',component: AproposComponent
  },
  {
    path: 'profile',component: ProfilesComponent
  },
  { path: 'product/:id', component:ProductsCategoryComponent },
  { path: 'list_user', component:ListUserComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'update-category/:id', component: AddCategoryComponent },
  { path: 'category', component: CategoryComponent },
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
