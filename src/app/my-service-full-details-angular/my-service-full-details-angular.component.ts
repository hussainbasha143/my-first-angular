import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
@Component({
  selector: 'app-my-service-full-details-angular',
  templateUrl: './my-service-full-details-angular.component.html',
  styleUrls: ['./my-service-full-details-angular.component.css']
})
export class MyServiceFullDetailsAngularComponent implements OnInit {
  public serviceArray=[];
  constructor(public ser: MyService) { 
    
  }

  ngOnInit(): void {
    this.serviceArray=  this.ser.getCollect();
  }


}
