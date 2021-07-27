import { Component, OnInit } from '@angular/core';
import * as _ from 'animejs'
import { Notice, NoticesService } from './service/notices.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  notices:Notice[]=[]
  hide: boolean;
  ngOnInit(): void {
    this.noticeservice.currentnotice.subscribe
    ((n:Notice) =>
     {
       if(this.notices.length>2)
       {
        this.notices.shift()
       }
       if(!(n.msg==""))
      this.notices.push(n)
    }
    )
  }
  constructor(private noticeservice:NoticesService){

  }
  title = 'final';
  
}
