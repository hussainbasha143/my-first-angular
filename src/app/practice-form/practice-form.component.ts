import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css']
})
export class PracticeFormComponent implements OnInit {
public routerArrary=[
  {id:"1",arrayInfo:"home",content:"Home"},
  {id:"2",arrayInfo:"courses",content:"Courses"},
  {id:"3",arrayInfo:"payment",content:"Payment"},
  {id:"4",arrayInfo:"contactus",content:"Contactus"},
]

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  getIds(x){
    console.log("calling");
    this._router.navigate([x.arrayInfo,x.id]);
  }
}
