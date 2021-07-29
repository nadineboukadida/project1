import { Component, Input, OnInit } from '@angular/core';
import { DemandeModule } from 'src/app/model/demande/demande.module';
import { notification, NotificationModule } from 'src/app/model/notification/notification.module';

@Component({
  selector: 'app-elementnotif',
  templateUrl: './elementnotif.component.html',
  styleUrls: ['./elementnotif.component.css']
})
export class ElementnotifComponent implements OnInit {
 @Input() notification:notification ={body:"", title :"",level : 1}
  @Input()exist:boolean
  status: string = "new";
purple : boolean = true ;
blue : boolean = false; 
green : boolean = false; 
red : boolean = false ;
title : string =""
body : string=""
  constructor() {


  }

  ngOnInit(): void {
    if (this.notification.body){
      this.body=this.notification.body
    }
    if(this.notification.title)
    {this.title=this.notification.title}
    if (this.notification.level==1){
      this.status="new";
      this.purple=true;
    } 
    else if (this.notification.level==2){
      this.status="working"
      this.blue=true;
    }
    else if (this.notification.level==3){
      this.status="ok"
      this.green=true;
    }
    else if (this.notification.level==4){
      this.status="closed"
     this.red=true;

    }
    
  }

}
