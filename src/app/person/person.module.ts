import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export class PersonModule { 


  constructor(
  public email:string ,
public  uid: string ,
private  _token : string , 
private  _tokenexpirationDate : Date,
public gender?:string,
public name ?: string,
public cin?:string,
public phone?:string
  ){

  }
  get token(){
    if(!this._tokenexpirationDate || new Date() > this._tokenexpirationDate )
    {return (null)}
    return this._token
  }
}
