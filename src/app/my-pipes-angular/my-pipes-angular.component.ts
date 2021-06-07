import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipes-angular',
  templateUrl: './my-pipes-angular.component.html',
  styleUrls: ['./my-pipes-angular.component.css']
})
export class MyPipesAngularComponent implements OnInit {
  number=25;
  herolist:any[];
  jsonval={name:'hussain',sal:'7.2',location:'bng'}
  name='checkpipe'
  todaydate=new Date();
  months=['jan','feb','march','april','may','june','july','aug','sep','oct','nove','decem']
  constructor() { }

  ngOnInit(): void {
    this.herolist=[
      {Name:"Mgr",role:"Hero",DOB:"10/07/1952"},
      {Name:"Rajanala",role:"Villan",DOB:"10/07/1942"},
      {Name:"Rajababu",role:"Comedian",DOB:"10/07/1972"},
      
    ]
  }

}
