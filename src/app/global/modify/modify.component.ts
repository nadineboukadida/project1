import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService, IDemandes } from 'src/app/service/demande.service';

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
    first: boolean= false;
    second: boolean= false;
    third: boolean= false;
    forth: boolean= false;
    final: { level: number; };
    type: string="";
  
  
    constructor(
      private router: Router,
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
      // this.first = true ;
      this.select1();
     
    }
     if (this.demande.type.includes("2")){
      this.second = true ;
      this.select2();
    }
    if (this.demande.type.includes("3")){
      this.third = true ;
      this.select3();
    }
     if (this.demande.type.includes("4")){
      this.forth = true ;
      this.select4();
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
    this.final={
     level:3
    }
   this.demandeservice.updatelevel(this.final,this.demande.docid);
    console.log('updated')
   }

   close(){
    this.final={
      level:4
     }
    this.demandeservice.updatelevel(this.final,this.demande.docid);
     console.log('updated')
   }
   
  }
