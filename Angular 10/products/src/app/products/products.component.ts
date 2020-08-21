import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(private productsService: ProductsService) {
  }


  ngOnInit(): void {
    this.productsService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })
  }

}
