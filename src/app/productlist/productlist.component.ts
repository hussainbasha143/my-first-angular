import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
result:any=[];
public errorMsg:string="Loading...";
  constructor(private product:ProductService) { }
public name;
  ngOnInit(): void {
    this.product.getProducts().subscribe((data=>{
      this.result=data;
    }),(error=>{this.errorMsg="unable to process your request due to technicl error"})
   
    )
  }

}
