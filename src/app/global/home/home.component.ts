import { Component, OnInit } from '@angular/core';
import { DemandeService, IDemandes } from 'src/app/service/demande.service';
import { DemandeModule } from 'src/app/model/demande/demande.module';
import { PositionService } from 'src/app/service/position.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  demandes: IDemandes[] = [];
  demandesComplete: IDemandes[] =[];
  b: boolean=false;
  exist: boolean;
  constructor(private demandeService:DemandeService , 
    private positionservice : PositionService, private loginservice : LoginService
    
    ) 
    {
   
     
  
   
   }

  ngOnInit(): void {
    this.exist = true ;

   this.getdemandes()
  
}
  getdemandes() :void{
      
    
    this.demandeService.firestore.collection('demands')
    .doc(this.loginservice.userID)
    .collection('collection',ref=> ref.where("level","<",4)).snapshotChanges() 
    .subscribe(
      (res)=> {
        if(res){     
        this.demandes= res.map (
        (demand)=> { 
          return {
           
     ...demand.payload.doc.data() as IDemandes,
             id : demand.payload.doc.id
          } as IDemandes;
        })
      this.exist = false
      ;
   
      }
 
    })
   
    
    

      
  }


  }


