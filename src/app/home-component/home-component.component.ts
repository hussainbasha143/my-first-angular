import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  public getId;
  
  constructor(private _routes:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    // two line it will works
   // let cid=parseInt(this._routes.snapshot.paramMap.get('id'));
  // let cid=this._routes.snapshot.paramMap.get('id');
 this._routes.paramMap.subscribe((params:ParamMap)=>{
  let cid=parseInt(params.get('id'));
  this.getId=cid;
   })
   
  }
  previous(){
    let preid=this.getId-1;
    this.route.navigate(['/home',preid]);
  }
  next(){
    let nextid=this.getId+1;
    this.route.navigate(['/home',nextid]);
  }
}
