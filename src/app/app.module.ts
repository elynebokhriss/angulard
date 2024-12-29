import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { FormsModule } from '@angular/forms';
import { FiltreTitrePipe } from './pipe/filtre-titre.pipe';
import { FiltreValuePipe } from './pipe/filtre-value.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { FilterPipe } from './filter.pipe';
import { ContactRoutingModule } from './contact/contact-routing.module';
import { FormProductComponent } from './form-product/form-product.component';
import { CardComponent } from './card/card.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListcategoriesComponent,
    FiltreTitrePipe,
    FiltreValuePipe,
    HighlightDirective,
    NotFoundComponent,
    ProductsCategoryComponent,
    FilterPipe,
    FormProductComponent,
    CardComponent,
    ListUserComponent,
    ListProductComponent,
    AddCategoryComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContactRoutingModule, 
    HttpClientModule, // Ajoutez ce module ici
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
