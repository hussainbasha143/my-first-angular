import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildviewComponent } from'../childview/childview.component';
@Component({
  selector: 'app-parentview',
  templateUrl: './parentview.component.html',
  styleUrls: ['./parentview.component.css']
})
export class ParentviewComponent implements OnInit {
@ViewChild(ChildviewComponent)childcpt:ChildviewComponent;
  constructor() { }
increse(){
  this.childcpt.incrementBy();
}
decrese(){
  this.childcpt.decrementBy();
}
  ngOnInit(): void {
  }

}
