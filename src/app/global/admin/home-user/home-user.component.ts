import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService, IDemandes } from 'src/app/service/demande.service';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  demandes: IDemandes[] = [];
  constructor(private demandeService:DemandeService , 
    private positionservice : PositionService, private router: Router,
    private activatedRoute : ActivatedRoute
        ) 
    {
   
     
  
 this.positionservice.changePosition("home");
   
   }

  ngOnInit(): void {
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

