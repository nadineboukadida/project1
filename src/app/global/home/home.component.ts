import { Component, OnInit } from '@angular/core';
import { DemandeService, IDemandes } from 'src/app/service/demande.service';
import { DemandeModule } from 'src/app/model/demande/demande.module';
import { PositionService } from 'src/app/service/position.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  demandes: IDemandes[] = [];
  demandesComplete: IDemandes[] =[];
  constructor(private demandeService:DemandeService , 
    private positionservice : PositionService
    
    ) 
    {
   
     
  
 this.positionservice.changePosition("home");
   
   }

  ngOnInit(): void {
    this.getdemandes()
    
  }



  getdemandes() :void{
    this.demandeService.getdemandes()
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
