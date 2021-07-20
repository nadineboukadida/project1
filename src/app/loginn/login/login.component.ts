import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {map} from 'rxjs/operators'
import { Compte } from 'src/app/compte/compte.module';
import { PersonneModule } from 'src/app/model/personne/personne.module';
import { DemandeService } from 'src/app/service/demande.service';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signuptop: boolean = false;
  signupform : boolean = false;
signupImage : boolean ;
  loginImage: boolean;
  signupsvg: boolean = false;
 

  constructor(private http: HttpClient, 
    private loginservice : LoginService, 
   private  demandeservice : DemandeService) { 
    this.signupImage = false;
    this.loginImage = false;
  }

  ngOnInit(): void {

  }

  signup(){
     this.signupImage =!this.signupImage  ;
     this.signupform= !this.signupform ; 
     this.signuptop = !this.signuptop  ;
     this.signupsvg  = !this.signupsvg ;
  }

  async signin(myform: {email : string , pass : string}){

    await this.loginservice.signin
    (myform.email, myform.pass)
    this.loginservice.isLoggedin = true ;
  
 }

 
}