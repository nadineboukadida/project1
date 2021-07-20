import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
 @Input() signupsvg : boolean =true ;
 @Input() signuptop :boolean =true ;
 @Input()signupform : boolean =true ;
@Output() signal = new EventEmitter;
  selected1: boolean=false ;
  selected2: boolean=false;
  @ViewChild('first')
  first!: ElementRef<HTMLElement>;
  @ViewChild('second')

  second!: ElementRef<HTMLElement>;
  checked1 : boolean = false;
  checked2 : boolean = false ;
  gender: string;

    constructor( private loginservice: LoginService,
      private route : Router) { }

  ngOnInit(): void {
  }
  signup(formGroup : NgForm){
    this.signal.emit ("hi");
    
  }

  select1 (){
    if (this.selected2==false && this.selected1==false) {
    this.selected1=true;

      }
       else if (this.selected1==true) {
         this.checked1= true;
         this.selected1 = true
       }
       else {
        this.selected1=true
        this.selected2=false
       }

       this.checked1= true ;
       this.checked2=false
  }
  select2 (){
    if (!this.selected1) {
      this.selected2=true;
        }
        else if ( this.selected2==true) {
          this.checked2= true;
          this.selected2= true
        }
         else {
           this.selected1=false
           this.selected2=true
         }
         this.checked1= false ;
         this.checked2=true
      }

  async createuser (myform: {email : string , pass : string, name : string}){
    if (this.checked1==true) {
   this.gender= 'female'
 }
 else {this.gender = "male"}
   await this.loginservice.createUser
    (myform.email, myform.pass, myform.name , this.gender);


    
   


  }}