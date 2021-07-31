import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from 'src/app/loginn/login/login.component';
import { DemandeService, IDemandes, User } from 'src/app/service/demande.service';
import { LoginService } from 'src/app/service/login.service';
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
  current: IDemandes[];
  selected1: boolean;
  selected2: boolean;
  selected3: boolean;
  selected4: boolean;
  click : boolean = false
  text : string = "Make admin"
  id: string
  person: User={email: "loading...", name:"", gender: "", admin:false}
  admin: {admin : boolean};
  disabled: boolean;
  constructor(private demandeService:DemandeService , 
    private positionservice : PositionService, private router: Router,
    private activatedRoute : ActivatedRoute, private userservice: PersonneService,
    private loginservice : LoginService
        ) 
    {
    
     
  
   
   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params)=> {
        this.id =String(params)
        console.log (params.id)
    this.getdemandes(params.id);
    this.getperson(params.id)
  
    })
  }
    

 
    
  
  getperson(id) {
    this.demandeService.getprofilid(id).subscribe(
      (res:User) =>{ 
        console.log("waaaaaaaaaaaaaaa", res, id)

        if(res){
        this.person=res
        console.log("waaaaaaaaaaaaaaa", this.person.email)

        if (this.person.admin){
          this.text="is Admin"
          this.disabled = true;
        }
         
          else { this.disabled = false;
          this.text="Make admin" }
          }})
  }

updateadmin (){
  this.admin ={
    admin  :true
  }
  this.loginservice.updateProfil1(this.admin,this.id);
  this.text="is Admin"
  this.click=true

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
        this.current=this.demandes;
      }});
    ;
    }

new(){
  this.current= this.demandes.filter(demand => demand.level ==1)
console.log('clicked')
  this.selected4=true ;
  this.selected1=false;
  this.selected2=false;
  this.selected3=false;
}

  working(){
    this.current= this.demandes.filter(demand => demand.level ==2)
    this.selected1=true;
    this.selected2=false;
    this.selected3=false;
    this.selected4=false;
  
  }
    ok (){
      this.current= this.demandes.filter(demand => demand.level ==3)
      this.selected2=true;
    this.selected1=false;
    this.selected4=false;

    this.selected3=false;
  
  
  
    }
  closed(){
    this.current= this.demandes.filter(demand => demand.level ==4)
    this.selected1=false;
    this.selected2=false;
    this.selected3=true;
    this.selected4=false;

  
  
  }
  
}

