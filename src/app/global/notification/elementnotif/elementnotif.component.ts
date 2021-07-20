import { Component, Input, OnInit } from '@angular/core';
import { DemandeModule } from 'src/app/model/demande/demande.module';
import { NotificationModule } from 'src/app/model/notification/notification.module';
import { PersonneModule } from 'src/app/model/personne/personne.module';

@Component({
  selector: 'app-elementnotif',
  templateUrl: './elementnotif.component.html',
  styleUrls: ['./elementnotif.component.css']
})
export class ElementnotifComponent implements OnInit {
@Input() element: NotificationModule =new NotificationModule( 
  new DemandeModule (0,"test nads",0), new PersonneModule (), new PersonneModule());
  status: string = "new";
purple : boolean = true ;
blue : boolean = false; 
green : boolean = false; 
red : boolean = false ;
  constructor() {


  }

  ngOnInit(): void {
    if (this.element.demande.level==1){
      this.status="new";
      this.purple=true;
    } 
    else if (this.element.demande.level==2){
      this.status="working"
      this.blue=true;
    }
    else if (this.element.demande.level==3){
      this.status="ok"
      this.green=true;
    }
    else if (this.element.demande.level==4){
      this.status="closed"
     this.red=true;

    }
    
  }

}
