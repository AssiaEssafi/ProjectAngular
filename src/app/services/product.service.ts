import { Injectable } from '@angular/core';
import { ProductModel } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductModel[];
  product! : ProductModel;

  constructor() {
    this.products = [
      { productId: 1, productName: "Cheese", productPrice: 34.00, DateCreation: new Date() },
      { productId: 2, productName: "Bread", productPrice: 3.00, DateCreation: new Date() },
      { productId: 3, productName: "Milk", productPrice: 7.00, DateCreation: new Date() },
    ];
  }

  productList(): ProductModel[] {
    return this.products;
  }

  addProduct(newProduct: ProductModel): void {
    this.products.push(newProduct);
  }

  deleteProduct(product : ProductModel):void{
    const index = this.products.indexOf(product , 0);
    this.products.splice(index , 1);
  }
  editProduct(id: number): ProductModel | undefined {
    return this.products.find(p => p.productId === id);
  }
updateProduct(product : ProductModel): void{
    this.deleteProduct(product);
    this.addProduct(product);
    this.sortProducts();
}
sortProducts():void{
    this.products.sort(
      (x,y)=>
        (x.productId! > y.productId! ? 1 : -1)
    );
}



}
