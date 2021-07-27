import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DemandeModule } from 'src/app/model/demande/demande.module';
import { DemandeService, IDemandes } from 'src/app/service/demande.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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
  final: { name: string; date: string; type: any; level: number; };
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
    }
 )
 setTimeout(()=>{ 
 this.check()}, 1000)



 
};


  select1 (){
    this.selected1=!this.selected1;
  }
  select2 (){
    this.selected2=!this.selected2;

  }
  select3 (){
    this.selected3=!this.selected3;

  }
  select4 (){
    this.selected4=!this.selected4;
  }

  onSubmit (myform: { name : string , 
    date :string}){
   
   if (this.selected1)
   {
     this.type= this.type+"1";
   }
   if (this.selected2)
   {
   
     this.type=this.type+"2";
   
   }
   if (this.selected3)
   {
     this.type= this.type+"3";
   }
   if (this.selected4)
   {
     this.type= this.type+"4";
 
   }
 
   this.final={name : myform.name ,
       date:myform.date,
      type : this.type ,
      level:1
      
     }
   this.demandeservice.updatedemande(this.final,this.demande.docid);
 }
 
 
}
