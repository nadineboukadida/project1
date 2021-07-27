import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { LoginService } from 'src/app/service/login.service';
import { NoticesService } from 'src/app/service/notices.service';
// import * as anime from '../../../../node_modules/animejs'
declare var anime: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnInit{
frame : boolean = false ;
  @ViewChild('myDiv')
  myDiv!: ElementRef<HTMLElement>;
  morph: any;
  adminTab: boolean;

  constructor(private loginservice : LoginService,
    private adminservice:AdminService,
    private router: Router,
    private noticeservice : NoticesService) { }
ngOnInit(){
  this.adminservice.currentmode.subscribe
  (msg => this.adminTab=msg)

}
  ngAfterViewInit(): void {
   
  //  this.morph=  anime.timeline({loop: false})
  //   .add({
  //     targets: '.morph',
  //    d:[
  //     //  {
  //       //  value: 'M0 68.5L5 70.5C10 72.5 21 75.5 31 81.5C42 87.5 52 94.5 63 90.5C73 87.5 83 72.5 94 64.5C104 57.5 115 57.5 125 57.5C135 57.5 146 57.5 156 55.5C167 53.5 177 49.5 188 41.5C198 34.5 208 23.5 219 32.5C229 41.5 240 72.5 250 73.5C260 75.5 271 49.5 281 51.5C292 53.5 302 83.5 313 87.5C323 90.5 333 68.5 344 60.5C354 53.5 365 60.5 370 64.5L375 68.5V0.5H370C365 0.5 354 0.5 344 0.5C333 0.5 323 0.5 313 0.5C302 0.5 292 0.5 281 0.5C271 0.5 260 0.5 250 0.5C240 0.5 229 0.5 219 0.5C208 0.5 198 0.5 188 0.5C177 0.5 167 0.5 156 0.5C146 0.5 135 0.5 125 0.5C115 0.5 104 0.5 94 0.5C83 0.5 73 0.5 63 0.5C52 0.5 42 0.5 31 0.5C21 0.5 10 0.5 5 0.5H0V68.5Z'},
  //       //  {value: 'M0 126.787L5 130.516C10 134.245 21 139.839 31 151.026C42 162.213 52 175.264 63 167.806C73 162.213 83 134.245 94 119.329C104 106.277 115 106.277 125 106.277C135 106.277 146 139.839 156 136.11C167 132.381 177 91.3612 188 76.4451C198 63.3935 208 82.4652 219 99.2458C229 116.026 240 134.245 250 136.11C260 139.839 271 91.3612 281 95.0902C292 98.8193 302 154.755 313 162.213C323 167.806 333 126.787 344 111.871C354 98.8193 365 111.871 370 119.329L375 126.787V0H370C365 0 354 0 344 0C333 0 323 0 313 0C302 0 292 0 281 0C271 0 260 0 250 0C240 0 229 0 219 0C208 0 198 0 188 0C177 0 167 0 156 0C146 0 135 0 125 0C115 0 104 0 94 0C83 0 73 0 63 0C52 0 42 0 31 0C21 0 10 0 5 0H0V126.787Z'},
  //        {value: 'M0 322.934L5 332.432C10 341.93 21 356.177 31 384.671C42 413.165 52 446.409 63 427.412C73 413.165 83 341.93 94 303.938C104 270.695 115 270.695 125 270.695C135 270.695 146 270.695 156 261.197C167 251.698 177 232.702 188 194.71C198 161.467 208 109.228 219 151.969C229 194.71 240 341.93 250 346.679C260 356.177 271 232.702 281 242.2C292 251.698 302 394.169 313 413.165C323 427.412 333 322.934 344 284.942C354 251.698 365 284.942 370 303.938L375 322.934V0H370C365 0 354 0 344 0C333 0 323 0 313 0C302 0 292 0 281 0C271 0 260 0 250 0C240 0 229 0 219 0C208 0 198 0 188 0C177 0 167 0 156 0C146 0 135 0 125 0C115 0 104 0 94 0C83 0 73 0 63 0C52 0 42 0 31 0C21 0 10 0 5 0H0V322.934Z'},
  //            {value:'M0 1704.17L5 1754.29C10 1804.41 21 1879.6 31 2029.96C42 2180.33 52 2355.76 63 2255.51C73 2180.33 83 1804.41 94 1603.92C104 1428.49 115 1428.49 125 1428.49C135 1428.49 146 1879.6 156 1829.47C167 1779.35 177 1228 188 1027.51C198 852.083 208 1108.43 219 1333.98C229 1559.53 240 1804.41 250 1829.47C260 1879.6 271 1228 281 1278.12C292 1328.25 302 2080.09 313 2180.33C323 2255.51 333 1704.17 344 1503.68C354 1328.25 365 1503.68 370 1603.92L375 1704.17V0H370C365 0 354 0 344 0C333 0 323 0 313 0C302 0 292 0 281 0C271 0 260 0 250 0C240 0 229 0 219 0C208 0 198 0 188 0C177 0 167 0 156 0C146 0 135 0 125 0C115 0 104 0 94 0C83 0 73 0 63 0C52 0 42 0 31 0C21 0 10 0 5 0H0V1704.17Z'},
  //   {value: 'M0 1.49161L5 1.53548C10 1.57935 21 1.64516 31 1.77677C42 1.90839 52 2.06193 63 1.97419C73 1.90839 83 1.57935  94 1.40387C104 1.25032 115 1.25032 125 1.25032C135 1.25032 146 1.25032 156 1.20645C167 1.16258 177 1.07484 188 0.899354C198 0.745806 208 0.504516 219 0.701935C229 0.899354 240 1.57935 250 1.60129C260 1.64516 271 1.07484 281 1.11871C292 1.16258 302 1.82064 313 1.90839C323 1.97419 333 1.49161 344 1.31613C354 1.16258 365 1.31613 370 1.40387L375 1.49161V0H370C365 0 354 0 344 0C333 0 323 0 313 0C302 0 292 0 281 0C271 0 260 0 250 0C240 0 229 0 219 0C208 0 198 0 188 0C177 0 167 0 156 0C146 0 135 0 125 0C115 0 104 0 94 0C83 0 73 0 63 0C52 0 42 0 31 0C21 0 10 0 5 0H0V1.49161Z'}
  //     ],
  //     direction: 'alternate',
  //     easing: 'easeInOutExpo',
  //     duration: 2000
  //   })
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

  admin(){
    this.triggerFalseClick()
  this.adminservice.changeMode(true)
this.router.navigate(['/admin/admin'])
this.noticeservice.changeMode({msg:"admin mode ON", valid  :true, admin  :true})

  }

  user(){
    this.triggerFalseClick()
  this.adminservice.changeMode(false)
this.router.navigate(['/home'])
  }
}
