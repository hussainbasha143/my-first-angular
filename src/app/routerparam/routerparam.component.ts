import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routerparam',
  template: `
    <p>
      routerparam works!
      {{getId}}
    </p>
  `,
  styles: [
  ]
})
export class RouterparamComponent implements OnInit {
public getId:number;
  constructor(private _routes:ActivatedRoute) { }

  ngOnInit(): void {
   let cid=parseInt(this._routes.snapshot.paramMap.get('id'));
   this.getId=cid;
  }

}
