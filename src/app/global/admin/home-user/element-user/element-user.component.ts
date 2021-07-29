import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService, IDemandes } from 'src/app/service/demande.service';

@Component({
  selector: 'app-element-user',
  templateUrl: './element-user.component.html',
  styleUrls: ['./element-user.component.css']
})
export class ElementUserComponent implements OnInit {
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
    // console.log(this.demande.name)
    // console.log(this.demande.date)
    // console.log(this.demande.level)

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
      this.router.navigate(['/admin/modify', this.demande.docid, this.demande.uid])
    }
  
  
}
