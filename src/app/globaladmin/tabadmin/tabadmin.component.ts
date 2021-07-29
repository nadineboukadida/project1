import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-tabadmin',
  templateUrl: './tabadmin.component.html',
  styleUrls: ['./tabadmin.component.css']
})
export class TabadminComponent implements OnInit {
  home : boolean = false;
  add : boolean = false;
  notif : boolean = false;
  //  positionservice: PositionService = new PositionService;
    position: string ="";
  // positionservice: any;
    constructor( private positionservice : PositionService) {
  // this.position= positionservice.position;
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
   
    }
    addClick(){
      this.add=true;
      this.home=false;
      this.notif=false;
   
  
    }
    notifClick(){
      this.notif=true;
      this.home=false;
      this.add=false;
  
  
    }
  
  
  
}
