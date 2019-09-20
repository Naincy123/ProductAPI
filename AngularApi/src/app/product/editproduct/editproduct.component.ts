import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})

export class EditproductComponent implements OnInit {
  
  productidtoedit="1";
  producttoedit: Product;
  editProductForm: FormGroup;
  constructor(private route: ActivatedRoute, private productservice: ProductService,private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.productidtoedit= data.id;
    }
    );
    this.productservice.getProductById(this.productidtoedit).subscribe(data =>{
      this.producttoedit=data;
      this.setDefault()
    });
    console.log(this.producttoedit);
    this.editProductForm= new FormGroup(
      {
       ProductID: new FormControl(null, Validators.required),
       Title: new FormControl(null, Validators.required),
       Price: new FormControl(null, Validators.required),
       Color: new FormControl(null, Validators.required),
       inStock: new FormControl(null, Validators.required),
       Quantity: new FormControl(null, Validators.required),
       Rating: new FormControl(null, Validators.required),
       ImageUrl: new FormControl(null, Validators.required),
       Details: new FormControl(null, Validators.required),
       ExpiryDate: new FormControl(null, Validators.required)
      }
    )
  }

  setDefault(){
    this.editProductForm.setValue({
      ProductID:this.producttoedit.ProductID,
      Title:this.producttoedit.Title,
      Price:this.producttoedit.Price,
      Color:this.producttoedit.Color,
      inStock:this.producttoedit.inStock,
      Quantity:this.producttoedit.Quantity,
      Rating:this.producttoedit.Rating,
      ImageUrl:this.producttoedit.ImageUrl,
      Details:this.producttoedit.Details,
      ExpiryDate:this.producttoedit.ExpiryDate
    })
  }
  prod;
  editProduct(){
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.id;
      this.productservice.editProduct(this.productidtoedit,this.editProductForm.value).subscribe(data1=>{
      this.prod=data1
          });
    });
     this.router.navigate(['home']);

    
  }
  Goback():void{
    this.router.navigate(['home']);
  }
  
}
    