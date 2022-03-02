import {Component} from '@angular/core';

@Component({
  selector:'app-simple-component',
  templateUrl:"./app.simple.view.html"
})
export class SimpleComponent{
  name:string;
  constructor(){
    this.name = "I am Simple Component";
  }
}
