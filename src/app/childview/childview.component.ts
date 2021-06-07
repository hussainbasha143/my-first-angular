import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childview',
  templateUrl: './childview.component.html',
  styleUrls: ['./childview.component.css']
})
export class ChildviewComponent implements OnInit {
  public messagecout;
public count:number=0;
  constructor() { }
incrementBy(){
this.count=this.count+1;
this.messagecout=this.count;
}
decrementBy(){
  this.count=this.count-1;
  this.messagecout=this.count;
  }
  ngOnInit(): void {
  }

}
