import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { NoticesService } from '../service/notices.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
home : string="home"
  adminTab: boolean=false;
  exist: boolean=false;
 
  constructor(private adminservice:AdminService,
    private noticeservice:NoticesService) { 


    }

  ngOnInit() {
    // console.log(localStorage.getItem('login'))

    this.adminservice.currentmode.subscribe
    (msg => this.adminTab=msg)

  //   this.noticeservice.currentnotice.subscribe
  //   (n => {this.notice=n;
  //     if (n.msg!="")
  //   {
  //     this.exist=true
  //   setTimeout(() => {
  //     this.exist=false
  //   }, 3000);
  // }})
  // }

  }}