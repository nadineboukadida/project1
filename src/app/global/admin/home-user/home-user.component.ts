import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService, IDemandes, User } from 'src/app/service/demande.service';
import { PersonneService } from 'src/app/service/personne.service';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  demandes: IDemandes[] = [];
  user:User;
  constructor(private demandeService:DemandeService , 
    private positionservice : PositionService, private router: Router,
    private activatedRoute : ActivatedRoute, private userservice: PersonneService
        ) 
    {
    
     
  
 this.positionservice.changePosition("home");
   
   }

  ngOnInit(): void {
    this.user= this.userservice.thisuser

    this.activatedRoute.params.subscribe(
      (params)=> {
    this.getdemandes(params.id);
      }
    )

 
    
  }



  getdemandes(id) :void{
    this.demandeService.getuserdemandes(id)
    .subscribe(
      (res)=> {
      
        this.demandes= res.map (
        (demand)=> { 
          return {
           
     ...demand.payload.doc.data() as IDemandes,
             id : demand.payload.doc.id
          } as IDemandes;
        });
      });
    ;

    console.log(this.demandes)
  }
}

