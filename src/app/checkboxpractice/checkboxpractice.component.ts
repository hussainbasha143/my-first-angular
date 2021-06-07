import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkboxpractice',
  template: `

    <p>
      checkboxpractice works!
    </p><br>
    <div class="form-check" *ngFor="let x of checkboxproperties">
    <input  #saveUserNameCheckBox type="checkbox" id="{{x.id}}" [checked]="" name="{{x.name}}"
     [(ngModel)]="x.ischecked" (click)="getValue(x.name,saveUserNameCheckBox.checked,x.id)" >
     {{clickMessage}}  
   &nbsp;
    <label for="{{x.name}}">{{x.name}}</label> 
    </div>
    <button (click)="checkedEvnt(false)">Uncheck All</button>&nbsp;

<button (click)="checkedEvnt(true)">Check All</button>

<p>
input type dynamic works!
</p><br>
<input type="text" ><i  (click)="addInput()" class="fa fa-plus-circle" aria-hidden="true"></i>
<div >
<table>
<tbody>
<tr *ngFor="let input of inputArray">
<td>
<input type="text" id="{{input.id}}" [(ngModel)]="input.value" name="{{input.name}}" >

<i (click)="removeInput(input.id)" class="fa fa-times" aria-hidden="true"></i>
</td>
</tr>
</tbody>
</table>

</div>

<ul *ngFor="let param of courses">
<li (click)="getId(param)"><a routerLink="check">{{param.name}}</a></li>
</ul>
<router-outlet></router-outlet>

  `,
  styles: [
    `
    ul li{
      display: inline;

    }
    li a{
      text-decoration:none;
    }
    
    `
  ]
})
export class CheckboxpracticeComponent implements OnInit {
  public id: number = 2;
  public ftbooleval = true;
  public booleval = false;
  public checkedInfo;
  ischecked = false;
  public inputArray: any = [
    { id: "1", name: "murali", value: "good" },

  ];
public courses=[
  {id:"0",name:"Angular8",demand:"super"},
  {id:"1",name:"React",demand:"super"},
  {id:"2",name:"javascript",demand:"good"},
  {id:"3",name:"html5",demand:"good"},
]
  public checkboxproperties = [
    { "id": "1", "name": "Raghu", ischecked: true },
    { "id": "2", "name": "Sridhar", ischecked: false },
    { "id": "3", "name": "Hussain", ischecked: false },
  ]
  addInput() {
    console.log("calling");
    this.inputArray.push({
      id: this.id, name: "Raghu", value: "vl"
    })
    this.id++;
  }
 
  removeInput(id) {
    console.log("calling-------"+id);
    const index = this.inputArray.indexOf(id);
    console.log("index-------"+index);
    this.inputArray.splice(index, 1);
    
  }
  addDynamicInputs(id) {
    console.log("id---" + id);
    //this.booleval = true;
    this.ftbooleval = true;
    this.inputArray.push(
      { id: id, name: "Raghu", value: id },
    )
    id++;

  }
  getValue(name, event, id) {
    console.log("name---" + name + " " + "ischeck--" + event + " --" + id);

    if (event) {
      console.log("corret")
      this.ischecked = event;

      for (let i = 0; i < this.checkboxproperties.length; i++) {
        this.checkboxproperties[i].ischecked = this.ischecked;
        if (this.checkboxproperties[i] == id) {
          this.checkboxproperties[i].ischecked = event;
        }
      }
    }


  }
  checkedEvnt(val) {
    // this.checkedInfo.target.checked = false;
    for (let i = 0; i < this.checkboxproperties.length; i++) {
      this.checkboxproperties[i].ischecked = val;
      //for toggle button
      // this.checkboxproperties[i].ischecked = !this.checkboxproperties[i].ischecked;
    }
  }
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  getId(param){
    this._router.navigate(['/check',param.id])
    console.log(param);
      }
}
