import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
  title="Products";
  products: any;
  searchText='';
  imageWidth=50;
  imageMargin=2;

  constructor(private ps : ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
    
  }
  ngAfterViewInit(){
    setTimeout(() => 
    this.ps.getProducts().subscribe(data =>{
      this.products=data;
      console.log(data);
    }),200)
  }
  getProducts(){
    this.ps.getProducts().subscribe(data =>{
      this.products=data;
    });
  }
  idtofetch="1";
  getProductById(){
    
    this.ps.getProductById(this.idtofetch).subscribe(data => {
      this.products=data;
    });
  }
  editProduct(id):void{
    this.router.navigate(['editproduct',id]);
  }
  deleteProduct(id):void{
    this.router.navigate(['deleteproduct',id]);
  }
  addProduct():void{
    this.router.navigate(['home']);
  }
  DetailsProduct(id):void{
    this.router.navigate(['productdetails',id]);
  }

}