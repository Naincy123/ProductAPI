import { Injectable, OnInit } from '@angular/core';
import { Product } from './entities/product';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';


@Injectable()
export class ProductService{
  
  apiurl='https://localhost:44326/api/products';
  
  headers= new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');
  httpOptions={
    headers : this.headers
  };
  constructor(private http: HttpClient){

  }
  private handleError(error: any){
    console.error(error);
    return throwError(error);
  }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getProductById(id: string): Observable<Product>{
    const myurl =`${this.apiurl}/${id}`;
    return this.http.get<Product>(myurl).pipe(
      catchError(this.handleError)
    );
  }
  editProduct(id:string,product:Product) : Observable<null | Product> {
    const myurl = `${this.apiurl}/${id} `;
    console.log(product)
    return this.http.put<Product>(myurl,product,this.httpOptions).pipe(tap(data=> console.log(data)), catchError(this.handleError)
    );
  }
  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiurl,product,this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  deleteProduct(id:string) : Observable<Product>
  {
    const myurl = `${this.apiurl}/${id} `;
    return this.http.delete<Product>(myurl,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  // products=[
  //   {
  //     "ProductID": "1",
  //     "Title": "Leaf Rake",
  //     "Color":"red",
  //     "Price": 400,
  //     "inStock": false,
  //     "Quantity": 15,
  //     "Details": "This is awsum",
  //     "Rating": 4,
  //     "ExpiryDate":"",
  //     "ImageUrl":""
  //   },
  //   {
  //     "ProductID": "2",
  //     "Title": "Garden Cart",
  //     "Color":"blue",
  //     "Price": 200,
  //     "inStock": true,
  //     "Quantity": 23,
  //     "Details": "This is awsum",
  //     "Rating": 3,
  //     "ExpiryDate":"",
  //     "ImageUrl":""
  //   },
  //   {
  //     "ProductID": "3",
  //     "Title": "Hammer",
  //     "Color":"black",
  //     "Price": 500,
  //     "inStock": true,
  //     "Quantity": 27,
  //     "Details": "This is awsum",
  //     "Rating": 5,
  //     "ExpiryDate":"",
  //     "ImageUrl":""
  //   },
  //   {
  //     "ProductID": "4",
  //     "Title": "Saw",
  //     "Color":"green",
  //     "Price": 700,
  //     "inStock": false,
  //     "Quantity": 17,
  //     "Details": "This is awsum",
  //     "Rating": 4,
  //     "ExpiryDate":"",
  //     "ImageUrl":""
  //   },
  //   {
  //     "ProductID": "5",
  //     "Title": "Video Game Controller",
  //     "Color":"blue",
  //     "Price": 900,
  //     "inStock": true,
  //     "Quantity": 34,
  //     "Details": "This is awsum",
  //     "Rating": 5,
  //     "ExpiryDate":"",
  //     "ImageUrl":""
  //   }
  // ];
  
  // constructor() { }

  // getProductsById(id): Product{
  //   return this.products.find(p => p.ProductID==id);

  // }
  
  // getProducts(): Product[] {
  //   //console.log('hey');
  //   return  this.products;
     
  // }
}
