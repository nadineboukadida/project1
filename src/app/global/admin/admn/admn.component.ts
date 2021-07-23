import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/service/demande.service';

@Component({
  selector: 'app-admn',
  templateUrl: './admn.component.html',
  styleUrls: ['./admn.component.css']
})
export class AdmnComponent implements OnInit {
@Input() user :User
  constructor() { }

  ngOnInit(): void {
    
  }

}
