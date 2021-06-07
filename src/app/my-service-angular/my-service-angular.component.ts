import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-my-service-angular',
  templateUrl: './my-service-angular.component.html',
  styleUrls: ['./my-service-angular.component.css']
})
export class MyServiceAngularComponent implements OnInit {
public serviceArray=[];
  constructor(public ser: MyService) { 
    
  }

  ngOnInit(): void {
    this.serviceArray=  this.ser.getCollect();
  }

}
