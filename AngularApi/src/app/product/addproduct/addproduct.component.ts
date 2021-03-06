import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../entities/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent implements OnInit {

  

  title="Add Product Form";
 
  addProductForm:FormGroup;
 // producttoedit:Product;
  constructor(private route :ActivatedRoute,private productservice:ProductService, private fb:FormBuilder, private router:Router) {  }

  ngOnInit() {
    

    //this.producttoedit=this.sc.getProductsById(this.productidtoedit);
   // console.log(this.producttoedit);
    this.addProductForm=new FormGroup({
      ProductID:new FormControl(),
      Title:new FormControl(),
      Price: new FormControl(),
      Color:new FormControl(),
      Quantity:new FormControl(),
      Details:new FormControl(),
      ExpiryDate:new FormControl(),
      ImageURL:new FormControl(),
      InStock:new FormControl(Boolean),
      Rating:new FormControl()
    })
    this.addProductForm.setValue({
      ProductID:"",
      Title:"",
      Price:"",
      Color:"",
      Quantity:"",
      Details:"",
      ExpiryDate:"",
      ImageURL:"",
      InStock:"",
      Rating:""
        })
  }

  setDefault(){
    this.addProductForm.setValue({
      ProductID:"",
      Title:"",
      Price:"",
      Color:"",
      Quantity:"",
      Details:"",
      ExpiryDate:"",
      ImageURL:"",
      InStock:"",
      Rating:""
        })

  }
  prod:Product;
  addProduct(){
    console.log(this.addProductForm.value);
    this.addProductForm.value
    this.productservice.addProduct(this.addProductForm.value).subscribe(data=>{
      this.prod=data;
      console.log(this.prod);
    });
    this.router.navigate(['home']);
  }
  Goback():void{
    this.router.navigate(['home'])
  }
}
