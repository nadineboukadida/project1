import { Component, Input, OnInit } from '@angular/core';
import { Notice } from '../service/notices.service';

@Component({
  selector: 'app-mynotice',
  templateUrl: './mynotice.component.html',
  styleUrls: ['./mynotice.component.css']
})
export class MynoticeComponent implements OnInit {
  @Input() notice: Notice= {msg:"", valid : true}
  valid: boolean;
    path: string;
  exist: boolean;
  exist1: boolean=false;
  black: boolean=false;
  blue : boolean ;
  red : boolean ; 
  green : boolean ; 
  pink : boolean ;
    constructor() { }
  
    ngOnInit(): void {
     
      if (this.notice.msg!="")

      {
        
        if (this.notice.valid){
        this.valid=this.notice.valid
        if(!this.valid){
          this.path="red"
        }
        else {this.path="green"}
        if (this.notice.admin) {
          this.path="black" ;
          this.black = true ;
          
        }} 
        if (this.notice.color) {
          if (this.notice.color=="green") {
            this.green=true;
            this.pink=false;
            this.blue=false;
            this.red=false
            
          }
          if (this.notice.color=="blue") {
            this.blue=true;
            this.pink=false;
            this.green=false;
            this.red=false
          }
          if (this.notice.color=="pink") {
            this.pink=true;
            this.green=false;
            this.blue=false;
            this.red=false
          }
          if (this.notice.color=="red") {
            this.red=true;
            this.pink=false;
            this.green=false;
            this.blue=false;
           
          }

        }

        this.exist=true
  
      setTimeout(() => {
        this.exist=false
      }, 2000);
      setTimeout(() => {
        this.exist1=true
      }, 3000);
    }}

}
