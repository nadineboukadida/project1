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
    constructor() { }
  
    ngOnInit(): void {
     
      if (this.notice.msg!="")
      {this.valid=this.notice.valid
        if(!this.valid){
          this.path="red"
        }
        else {this.path="green"}
        if (this.notice.admin) {
          this.path="black" ;
          this.black = true ;
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
