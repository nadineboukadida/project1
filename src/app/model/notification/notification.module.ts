import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeModule } from '../demande/demande.module';
import { PersonneModule } from '../personne/personne.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NotificationModule { 
  demande : DemandeModule ;
  receiver : PersonneModule ; 
  sender : PersonneModule ;
  msg : string ;
  constructor(demande: DemandeModule, receiver : PersonneModule , sender : PersonneModule){
    this.demande= demande ; 
    var x = this.demande.id;
    this.msg= "your demand".concat("ID=",String(x),"is on a new level ! check it out now" );
    this.receiver= receiver ; 
    this.sender = sender ;
  }

}
