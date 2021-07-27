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
  constructor(private demandeService:DemandeService , 
    private positionservice : PositionService, private loginservice : LoginService
    
    ) 
    {
   
     
  
 this.positionservice.changePosition("home");
   
   }

  ngOnInit(): void {
  
   this.getdemandes()
  
}
  getdemandes() :void{
  
    setTimeout(() => {
      
  console.log('1',localStorage.getItem('user'))

    this.demandeService.firestore.collection('demands')
    .doc(localStorage.getItem('user'))
    .collection('collection' ,ref=> ref.where("type","<","4")).snapshotChanges()
    
    .subscribe(
      (res)=> {
      
        this.demandes= res.map (
        (demand)=> { 
          return {
           
     ...demand.payload.doc.data() as IDemandes,
             id : demand.payload.doc.id
          } as IDemandes;
        });
      })
   
    
    }, 4000);

      
    }


  }


