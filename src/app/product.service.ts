import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import{throwError,Observable} from 'rxjs';
import{catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("https://my-json-server.typicode.com/TeluguTechSteps/Products/info");
   
  }
  errorHandler(error:HttpErrorResponse){ 
return Observable.throw(error.message || "server Error");


  }
  
}
