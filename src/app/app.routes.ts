import {ProductsListComponent} from "./products-list/products-list.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {EditProductComponent} from "../edit-product/edit-product.component";
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core";
export const routes: Routes = [
  {path : "products_list" , component : ProductsListComponent},
  {path : "add_products" , component : AddProductComponent},
  { path: 'edit_products/:id', component: EditProductComponent },
  { path: "", redirectTo: "products_list", pathMatch: "full" }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
