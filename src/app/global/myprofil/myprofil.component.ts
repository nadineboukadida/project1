import { Component, OnInit } from '@angular/core';
import { DemandeService, User } from 'src/app/service/demande.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-myprofil',
  templateUrl: './myprofil.component.html',
  styleUrls: ['./myprofil.component.css']
})
export class MyprofilComponent implements OnInit {
  border: boolean = false ;
  disable:boolean=true ;
  personne : User;
  pic : string = "profil"
  constructor( private demandeservice : DemandeService,private loginservice: LoginService) { }

  ngOnInit(): void {
    this.getpersonne()
    console.log(this.loginservice.userID)
   
    console.log(this.pic)
  }
  getpersonne(){
    this.demandeservice.getprofil().subscribe(
      (res:User) =>{ this.personne=res
    console.log(this.personne)
    if (res.gender=="male") {
      this.pic= 'profil1'
    }
  }
    )
  }
  updateProfil(myform :{name :string , phone : string , cin : string}) {
    this.loginservice.updateProfil(myform);
    console.log(myform)
  }


  edit(){
    this.border = true ;
    this.disable=false ;
      }
}
