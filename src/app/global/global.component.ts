import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
home : string="home"
  adminTab: boolean=false;
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    this.adminservice.currentmode.subscribe
    (msg => this.adminTab=msg)
  }

}
