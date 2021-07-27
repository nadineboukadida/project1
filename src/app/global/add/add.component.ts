import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeService } from 'src/app/service/demande.service';
import { LoginService } from 'src/app/service/login.service';
import { PositionService } from 'src/app/service/position.service';
import { Router } from '@angular/router';
import { NoticesService } from 'src/app/service/notices.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
selected1 : boolean = false ;
selected2 : boolean = false ;
selected3 : boolean = false ;
selected4 : boolean = false ;
type : string ='';
 final !: {name :string ,type :string , level : number, date,uid} ;

  constructor(private positionservice: PositionService,
    private demandeservice : DemandeService, private loginservice: LoginService,
    private noticeservice:NoticesService
    ) { 

  }

  ngOnInit(): void {
    this.positionservice.changePosition("add");
    // setInterval((()=>console.log ('hiiiiiiii')), 2000) 

    // setInterval((()=>console.log (this.type)), 2000) 
  
  }
select1 (){
  this.selected1=!this.selected1;
}
select2 (){
  this.selected2=!this.selected2;
}
select3 (){
  this.selected3=!this.selected3;
}
select4 (){
  this.selected4=!this.selected4;
}



onSubmit (myform: { name : string , 
   date :string ,paies:boolean, 
   attsalaire:boolean , 
   atttravail : boolean, certif:boolean}){
  console.log(myform);
  
  if (myform.paies)
  {
    this.type= this.type+"1";
  }
  if (myform.attsalaire==true)
  {
  
    console.log('hiiiii')
    this.type=this.type+"2";
  
  }
  if (myform.atttravail)
  {
    this.type= this.type+"3";
  }
  if (myform.certif)
  {
    this.type= this.type+"4";

  }

  this.final={name : myform.name ,
      date:myform.date,
     type : this.type ,
     level:1,
     uid:this.loginservice.userID
     
    }
  console.log( this.final)
  console.log(this.loginservice.userID);
  this.demandeservice.addDemande(this.final);
  this.noticeservice.changeMode({msg:"Just added it!", valid  :true})
}


log (){
 
}

}
