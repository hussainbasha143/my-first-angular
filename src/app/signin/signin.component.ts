import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
getSignIn(signdata){
console.log(signdata);
}
getcheck(val){
console.log(val);
}
  constructor() { }

  ngOnInit(): void {
  }

}
