import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {map} from 'rxjs/operators'
import { Compte } from 'src/app/compte/compte.module';
import { DemandeService } from 'src/app/service/demande.service';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { NoticesService } from 'src/app/service/notices.service';
import { AngularFireAuth } from '@angular/fire/auth';

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
  notice: any;
  exist: boolean;
  valid : boolean
  path: string;
 

  constructor(private http: HttpClient, 
    public firebaseAuth : AngularFireAuth,
    private loginservice : LoginService,
    private router : Router, 
   private  demandeservice : DemandeService,
   private noticeservice:NoticesService) { 
    this.signupImage = false;
    this.loginImage = false;
  }

  ngOnInit(): void {
   
    this.noticeservice.currentnotice.subscribe
    (n => {this.notice=n;
      if (n.msg!="")
    {this.valid=n.valid
      if(!this.valid){
        this.path="red"
      }
      else {this.path="green"}

      this.exist=true

    setTimeout(() => {
      this.exist=false
    }, 3000);
  }})
  
  
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