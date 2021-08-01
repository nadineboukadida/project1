import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { DemandeService, IDemandes, User } from 'src/app/service/demande.service';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-admn',
  templateUrl: './admn.component.html',
  styleUrls: ['./admn.component.css']
})
export class AdmnComponent implements OnInit {
@Input() user :User
  demandes: IDemandes[];
  number : number;
  constructor(private adminservice:AdminService,
    private userservice:PersonneService, 
    private demandeService : DemandeService) {
   }

  ngOnInit(): void {
   this.userservice.thisuser=this.user;
   this.getdemandes(this.user.uid)
// console.log(this.adminservice.adminTab)
    
  }
  getdemandes(id) :void{
    this.demandeService.getuserdemandes1(id)
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
        this.number=this.demandes.length
      }});
    ;
    }

}
