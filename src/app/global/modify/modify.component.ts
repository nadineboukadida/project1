import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService, IDemandes } from 'src/app/service/demande.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

    id: number=0;
   demande :IDemandes;
  
   selected1 : boolean = false ;
  selected2 : boolean = false ;
  selected3 : boolean = false ;
  selected4 : boolean = false ;
   level2=false;
   level3=false;
   level4=false;
notice=false;

    final: { level: number; };
    type: string="";
  update: { level: number; admin: string; };
  text: string="loremloremloremloremlorem"
  
  
    constructor(
      private router: Router,
      private loginservice : LoginService,
      private demandeservice : DemandeService,
      private activatedRoute : ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        (params)=> {
      this.getdemande(params.id);

        }
      )

      
    
  
       
  
    }
  
  check(){
    if (this.demande.type.includes("1")){
      this.select1();
     
    }
     if (this.demande.type.includes("2")){
      this.select2();
    }
    if (this.demande.type.includes("3")){
      this.select3();
    }
     if (this.demande.type.includes("4")){
      this.select4();
    }
if (this.demande.level==1)
{this.level2=true}
if (this.demande.level==2&& 
  this.demande.admin == this.loginservice.userID)
{this.level3=true
this.level2=false;

this.level4=true
}
if (this.demande.level==2&& 
  this.demande.admin!== this.loginservice.userID)
{this.level2=false;
  this.level3=false
this.level4=false
this.notice=true;
this.text ="another admin is working on this demand"
}
if (this.demande.level==3&& 
  this.demande.admin!== this.loginservice.userID)
{this.level3=false
this.level2=false;
this.notice=true;
this.text ="another admin is working on this demand"

this.level4=false
}
if (this.demande.level==3&& 
  this.demande.admin== this.loginservice.userID)
{this.level3=false
this.level2=false;

this.level4=true
}
  }



    
   
  
  
  
  
     getdemande(id){
   this.demandeservice.getdemand(id).subscribe(
      (res:IDemandes) => {
       
        this.demande=res
        console.log(this.demande)
      }
    // console.log(this.demande)
   )
   setTimeout(()=>{ 
   this.check()}, 1000)
  
  
  
   
  };
  
  
    select1 (){
      this.selected1=!this.selected1;
      console.log('1', this.selected1)
    }
    select2 (){
      this.selected2=!this.selected2;
  
    }
    select3 (){
      this.selected3=!this.selected3;
      console.log('3', this.selected3)
  
    }
    select4 (){
      this.selected4=!this.selected4;
    }
  
   
   accept(){
     this.level3=false;
    this.final={
     level:3
    }
   this.demandeservice.updatelevel(this.final,this.demande.docid);
    console.log('updated')
   }

   close(){
    this.level4=false;

    this.final={
      level:4
     }
    this.demandeservice.updatelevel(this.final,this.demande.docid);
     console.log('updated')
   }
   workonit(){
    this.level2=false;

     this.level3=true;
     this.level4=true ;
     this.update ={
       level:2,
       admin: this.loginservice.userID
     }
     this.demandeservice.updateadmin(this.update,this.demande.docid)

   }
  }
