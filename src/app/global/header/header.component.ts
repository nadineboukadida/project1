import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
frame : boolean = false ;
  @ViewChild('myDiv')
  myDiv!: ElementRef<HTMLElement>;

  constructor(private loginservice : LoginService,  private router: Router) { }

  ngOnInit(): void {
  }

  activate(){
this.frame= !this.frame;
  }
  close(){
    this.triggerFalseClick()
  }


  triggerFalseClick() {
      let el: HTMLElement = this.myDiv.nativeElement;
    //  console.log(el);
      el.click();
      // this.frame=false
  }
  logout(){
    this.triggerFalseClick()
    this.triggerFalseClick()
  this.loginservice.isLoggedin=false;
  this.loginservice.logout();
  }
}
