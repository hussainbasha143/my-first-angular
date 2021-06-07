import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public msg;
  storeSignupval(signupval){
console.log(signupval);
this.msg="Account Exist Please SignIn"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
