import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  // serviceArray=[{"id":10,"name":"hussain","sal":"7.2","location":"hyd"},
  // {"id":11,"name":"basha","sal":"7.0","location":"chennai"},
  // {"id":12,"name":"virat","sal":"7.8","location":"bng"}]
  getCollect(){
    return[{"id":10,"name":"hussain","sal":"7.2","location":"hyd"},
    {"id":11,"name":"basha","sal":"7.0","location":"chennai"},
    {"id":12,"name":"virat","sal":"7.8","location":"bng"}]
  }
  constructor() { }
}
