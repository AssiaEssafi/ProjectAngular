import { Component, OnInit } from '@angular/core';
import { ProductModel } from "../app/models/product.model";
import { ProductService } from "../app/services/product.service";
import { ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {DatePipe} from "@angular/common";
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  currentProduct: ProductModel = new ProductModel(); // Initialisation avec un objet vide

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const productId = +this.activatedRoute.snapshot.params['id']; // Conversion en nombre
    const product = this.productService.editProduct(productId);

    if (product) {
      this.currentProduct = product;
    } else {
      console.error(`Produit avec l'ID ${productId} introuvable.`);
    }
  }
  updateProduct(): void {
    this.productService.updateProduct(this.currentProduct); // Mettez à jour le produit
    console.log("Navigating to products list..."); // Ajoutez ce log pour vérifier
    this.router.navigate(['products_list']); // Naviguer vers la liste des produits
  }

}
