import { Component, OnInit } from '@angular/core';
import { PersonneModule } from 'src/app/model/personne/personne.module';
import { DemandeService, User } from 'src/app/service/demande.service';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-profil', 
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

border: boolean = false ;
disable:boolean=true ;
personne :User;

  constructor(private personneservice : PersonneService , 
    private demandeservice : DemandeService
    ) { 
    
  }

  ngOnInit(): void {
  //  this.demandeservice.getprofil().subscribe
  //    (res=> console.log (res) )
    
  }

  edit(){
this.border = true ;
this.disable=false ;
  }
  // submit (myyform:{name : string , email : string , cin: string}){

  // }


}
