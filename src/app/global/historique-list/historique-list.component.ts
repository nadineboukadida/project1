import { Component, OnInit } from '@angular/core';
import { DemandeModule } from 'src/app/model/demande/demande.module';
import { DemandeService, IDemandes } from 'src/app/service/demande.service';

@Component({
  selector: 'app-historique-list',
  templateUrl: './historique-list.component.html',
  styleUrls: ['./historique-list.component.css']
})
export class HistoriqueListComponent implements OnInit {
  demandes:IDemandes[] = [];
  exist: boolean;

  constructor(private demandeservice :DemandeService) {
   }

  ngOnInit(): void {
    // this.getdemandes()
    this.exist = true ;

    this.getdemand()
  }

  getdemand(){
this.demandeservice.gethistory()
   .subscribe(
    (res)=> {
      if (res) {
      this.demandes= res.map (
      (demand)=> { 
        return {
         
   ...demand.payload.doc.data() as IDemandes,
           id : demand.payload.doc.id
        } as IDemandes;
        
      })
    }     this.exist = false ;

   })
}



}