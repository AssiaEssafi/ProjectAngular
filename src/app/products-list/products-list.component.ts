import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductModel} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: ProductModel[];

  constructor(private productService : ProductService) {
    this.products = productService.productList();

  }
  deleteProduct(product : ProductModel): void{
    let message : boolean = confirm("Are you sure to delete this product");
    if(message)
    this.productService.deleteProduct(product);
  }
}
