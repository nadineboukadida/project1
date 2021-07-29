import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeModule } from '../demande/demande.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NotificationModule { 
  
}

export interface notification {
body : string ,
title : string,
level: number,
docid?:string,
id?:string,
seen?:boolean,
date?: Date
}