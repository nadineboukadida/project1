import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
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



  position: string ="";
  pic: string="notifgray"
  constructor( private positionservice : PositionService,
    private notificationservice: NotificationService) {
this.notificationservice.getpic().subscribe((pic)=> this.pic = pic)

    this.positionservice.getposition().subscribe((pos)=> {this.position=pos
   
   
      if (this.position=="home") {
        this.home=true;
        this.notif=false;
        this.add=false;
      }
      else if (this.position=="notif") {
        this.notif=true;
        this.home=false;
        this.add=false;
      }
      else if (this.position=="add"){
        this.add=true ;
        this.home=false;
        this.notif=false;
      }
   
   
    })
    // })
   }

  ngOnInit(): void {


  }
  homeClick(){
    this.home=true;
    this.notif=false;
    this.add=false;
 this.positionservice.changeMode1("home");
 
  }
  addClick(){
    this.add=true;
    this.home=false;
    this.notif=false;
    this.positionservice.changeMode1("add")
 

  }
  notifClick(){
    this.notif=true;
    this.home=false;
    this.add=false;
 this.positionservice.changeMode1("notif")


  }


}
