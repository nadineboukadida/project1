import { Inject, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeService } from '../../service/demande.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DemandeModule{
id ?: number = 0;
name : string ="demande";
level : number =0;
types: string ="";
date: Date=new Date;
constructor (@Inject(Number)id: number=0 ,

  @Inject(String)name:string="" , @Inject(Number)level:number=-1, @Inject(String)types: string="" 
  , @Inject(Date)date:Date= new Date){
        this.id=id;
  this.name = name;
  this.level=level;
  this.types=types ;
  this.date=date ;}
changelevel (level: number){
  this.level= level ;

}

 }
