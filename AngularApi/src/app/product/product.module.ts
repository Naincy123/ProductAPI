import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './productfilter.pipe';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const productroutes: Routes = [
  {path:'home',component: ListproductsComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'deleteproduct/:id',component:DeleteproductComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent}
];

@NgModule({
  declarations: [AddProductComponent, DeleteproductComponent, EditproductComponent, ListproductsComponent, ProductFilterPipe, ProductdetailsComponent],
  providers:[ProductService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productroutes),
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
