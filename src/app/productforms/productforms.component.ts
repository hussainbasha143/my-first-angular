import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productforms',
  templateUrl: './productforms.component.html',
  styleUrls: ['./productforms.component.css']
})
export class ProductformsComponent implements OnInit {
  checkform(ticketform){
    console.log(ticketform);

  }
 registrationFrom=new FormGroup({
  uname : new FormControl(''),
  pwd : new FormControl(''),
  cinformpwd : new FormControl(''),
 })
  constructor() { }

  ngOnInit(): void {
  }

}
