import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductModel } from "../models/product.model";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: ProductModel = new ProductModel();

  constructor(private productService: ProductService) {

  }

  addProduct():void {
     this.productService.addProduct(this.newProduct);
  }


}
