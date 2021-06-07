import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
restaurantform=new FormGroup({
DishName :new FormControl('',[Validators.required,Validators.minLength(3)]),
DishPrice : new FormControl('',[Validators.required,Validators.minLength(2)]),
Ingredients : new FormControl(''),
})

checkconsole(){
  console.log(this.restaurantform.controls['DisName']);
}
  constructor() { }

  ngOnInit(): void {
  }

}
