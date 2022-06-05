import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl:'./about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public test : string = "toto";
    i:any =0;
  constructor(){}

  ngOnInit(): void {
  }
get(){
  this.i+=1
}
}
