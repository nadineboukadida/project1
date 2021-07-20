import { Component, Input, OnInit } from '@angular/core';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
home : boolean = false;
add : boolean = false;
notif : boolean = false;
 positionservice: PositionService = new PositionService;
  position: string ="";
  constructor( positionservice : PositionService) {
this.position= positionservice.position;
   }

  ngOnInit(): void {
    if (this.position=="home") {
      this.home=true;
    }
    else if (this.position=="notif") {
      this.notif=true;
    }
    else if (this.position=="add"){
      this.add=true ;
    }
  }
  homeClick(){
    this.home=true;
    this.notif=false;
    this.add=false;
 this.positionservice.changePosition("home");
  }
  addClick(){
    this.add=true;
    this.home=false;
    this.notif=false;
 this.positionservice.changePosition("add");

  }
  notifClick(){
    this.notif=true;
    this.home=false;
    this.add=false;
 this.positionservice.changePosition("notif");


  }


}
