import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { DemandeService, IDemandes, User } from 'src/app/service/demande.service';
import { LoginService } from 'src/app/service/login.service';
import { PersonneService } from 'src/app/service/personne.service';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-workingon',
  templateUrl: './workingon.component.html',
  styleUrls: ['./workingon.component.css']
})
export class WorkingonComponent implements OnInit {
  demandes: IDemandes[] = [];
  user:User;
  progress: IDemandes[];
  okdemands: IDemandes[];
  closeddemands: IDemandes[];
  current: IDemandes[];
  admins: IDemandes[];
  demand: IDemandes[];
  selected1: boolean;
  selected2: boolean;
  selected3: boolean;
  constructor(private demandeService:DemandeService , 
    private positionservice : PositionService, private router: Router,
    private activatedRoute : ActivatedRoute, private userservice: PersonneService,
    private adminservice :AdminService,public firebaseAuth : AngularFireAuth ,
    private firestore: AngularFirestore, private loginservice:LoginService
        ) 
    {
   }

  ngOnInit(): void {

    localStorage.setItem('admin','false')
    this.getadminRec()
    // console.log(this.demandes)
 

  }



  getadminRec() :void{
    this.adminservice.getadmin()
    .subscribe(
      (res)=> {
      if (res){
        console.log (res)
        this.admins= res.map (
        (demand)=> { 
          console.log(demand)
          return {
           
     ...demand.payload.doc.data() as IDemandes,
             id : demand.payload.doc.id
          } as IDemandes;
                     
        });   this.getworkingon(this.admins)}})
        
          }
  



  getworkingon(array){
  
 array.forEach((res:IDemandes)=> {
   
    this.firestore.collection('demands').doc(res.uid)
      .collection('collection').doc(res.docid).valueChanges().subscribe(
          (e:IDemandes)=> {
if (e){
           this.demandes.push(e)
           } })
this.current=this.demandes
console.log('waaaaaaaaa', this.current)
 }    
      )
  

  

}

reload(){
  location.reload()

}
working(){
  this.current= this.demandes.filter(demand => demand.level ==2)
  this.selected1=true;
  this.selected2=false;
  this.selected3=false;
}
  ok (){
    this.current= this.demandes.filter(demand => demand.level ==3)
    this.selected2=true;
  this.selected1=false;
  this.selected3=false;



  }
closed(){
  this.current= this.demandes.filter(demand => demand.level ==4)
  this.selected1=false;
  this.selected2=false;
  this.selected3=true;


}

}


