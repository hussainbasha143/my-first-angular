import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checksingle',
  template: `
  <input type="text" placeholder="enter name" [(ngModel)]=name>

  // in 3 was we can write property binding
  <input [id]="number" type="text" placeholder="enter" value="test"> 
  <input bind-id="number" type="text" placeholder="enter" value="test"> 
  <input id="{{number}}" type="text" placeholder="enter" value="test"> 
    <p >
      checksingle works!
    </p>
    <div>{{"Welcome to:"+name}}</div>
    <p>{{name.length}}</p>
    <p>{{name.toUpperCase()}}</p>
    <p>{{method()}}</p>
    <p>{{location}}</p>
    //class binding
    <p [class]="color">class binding</p>
    <p [class.getalign]="required">class binding</p>
    <p [ngClass]="group">class binding</p>

    //style binding
    <p [style.color]="'red'"> stylebinding</p>
    <p [style.color]="checkfont"> stylebinding</p>
    <p [style.color]="required ? 'yellow':'red'"> stylebinding</p>
    <p [ngStyle]="groupcolors">All colors</p>
   //ng if two ways

    <div *ngIf="namesif ;else elseblock ">ngif condition true</div>
    <ng-template #elseblock>else block showing</ng-template>

    <div *ngIf="namesif2 then ifblock;else elseblock "></div>
    <ng-template #ifblock>if block showing</ng-template>
    <ng-template #elseblock>else block showing</ng-template>

    <div [ngSwitch]="switch">
<p *ngSwitchCase="'yes'">show switch</p>
<p *ngSwitchDefault>default</p>
    </div>

    //ngFor
    <div *ngFor="let x of items;index as i;even as e;first as f">
    <p>{{i}}--{{e}}---{{f}}--{{x}}</p>
    </div><br>
    //pipes
  <div>
  <p>{{pipename|uppercase}}</p>
  <p>{{pipename|lowercase}}</p>
  <p>{{date|date:'dd/M/yy'}}</p>
<p>{{money | currency:"INR"}}</p>
<p>{{money | currency:"USD"}}</p>
<p>{{pipename | slice:0:5}}</p>
<p>{{groupcolors | json}}</p>
<p>{{ 1.2 | percent}}</p>
<p>{{123.56480 | number:"0.0-3"}}</p>
<p>"hussain age:"{{dob | age}}</p>

  </div>
  
  `,
  styles: [
    `p{
    color:blue;
    font-size:30px;
  }
  
  .getcolor{
    color:red;
  }
  .getfont{
    font-size:20px;
    background-color:orange;
  }
  .getalign{
    font-style:italic;
    font-size:50px;
  }
  `
  ]
})
export class ChecksingleComponent implements OnInit {


  public money = 48000;
  public dob = "10/07/1993"
  public switch = "yes";
  public date = new Date();
  public pipename = "checkpipe";
  public namesif = true;
  public namesif2 = true;
  public name: string = "username"
  public location = window.location.href;
  public number = 10;
  public color = "getcolor"
  public required = "true";
  public items = ["angular", "ang2", "ang3"]
  groupcolors = {
    "font-size": "25px",
    "color": "gold",
    "font-style": "bold"
  }
  public group = {
    "getalign": this.required,
    "getfont": this.required,
    "getcolor": this.required
  }
  public checkfont = "green"
  constructor() { }
  getval(val) {
    console.log("box1checking-----" + val);
    // this.box1 = val;
  }
  method() {
    return "welcome to name in method:" + this.name
  }
  ngOnInit(): void {
  }

}
