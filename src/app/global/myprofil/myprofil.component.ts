import { Component, OnInit } from '@angular/core';
import { DemandeService, User } from 'src/app/service/demande.service';
import { LoginService } from 'src/app/service/login.service';
import { NoticesService } from 'src/app/service/notices.service';

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
  constructor( private demandeservice : DemandeService,private loginservice: LoginService,
    private noticeservice :  NoticesService){ }

  ngOnInit(): void {
    this.getpersonne()
 
  }
  getpersonne(){
       this.demandeservice.getprofil().subscribe(
      (res:User) =>{ 
        if (res) {
        this.personne=res
    if (res.gender=="male") {
      this.pic= 'profil1'
    }
        }}
    )
    
   
  }
  updateProfil(myform :{name :string , phone : string , cin : string}) {
    this.loginservice.updateProfil(myform);

  this.noticeservice.changeMode({msg:"updated successfully", valid  :true})

  }


  edit(){
    this.border = true ;
    this.disable=false ;
      }
}
