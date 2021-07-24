import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { User } from 'src/app/service/demande.service';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-admn',
  templateUrl: './admn.component.html',
  styleUrls: ['./admn.component.css']
})
export class AdmnComponent implements OnInit {
@Input() user :User
  constructor(private adminservice:AdminService,
    private userservice:PersonneService) {
   }

  ngOnInit(): void {
   this.userservice.thisuser=this.user;
// console.log(this.adminservice.adminTab)
    
  }

}
