import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';
import { Routes, RouterModule } from '@angular/router'
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: ProductsComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'form', component: FormComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
