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
  this.positionservice.currentpos.subscribe((pos)=> {this.position=pos
  })
     }
  
    ngOnInit(): void {
      if (this.position=="admin") {
        this.home=true;
        this.add=false;
      }
      else if (this.position=="work") {
        this.notif=true;
        this.home=false;
      }
   
    }
    homeClick(){
      this.home=true;
      this.add=false;
this.positionservice.changeMode("admin")
   
    }
    addClick(){
      this.add=true;
      this.home=false;
this.positionservice.changeMode("work")

    }


}
