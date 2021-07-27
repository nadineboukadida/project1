import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDemandes, DemandeService } from 'src/app/service/demande.service';

@Component({
  selector: 'app-element-work',
  templateUrl: './element-work.component.html',
  styleUrls: ['./element-work.component.css']
})
export class ElementWorkComponent implements OnInit {
  @Input()
  demande!: IDemandes;
  new: boolean=false ;
  progress: boolean=false;
  accepted: boolean=false;
  closed: boolean=false;
  pourcentage : string="0%";
  status : string="still new !";
  constructor(private demandeservice: DemandeService, private router :Router) {
   
   }

  ngOnInit(): void {

    if (this.demande.level==1){
      this.new = true ;
    }
    else if (this.demande.level==2){
      this.new = true ;
      this.progress=true;
      this.status="Working on it..";
    }
    else if (this.demande.level==3){
      this.new = true ;
      this.progress=true;
      this.accepted = true ;
      this.status="ACCEPTED !!";

    }
    else if (this.demande.level==4){
      this.new = true ;
      this.progress=true;
      this.accepted = true ;
      this.closed = true;
      this.status="Closed ";

    }
  }

  link(){
      this.router.navigate(['/admin/modify', this.demande.docid,this.demande.uid])
    }
  
  
}

