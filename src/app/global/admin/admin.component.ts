import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/service/demande.service';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 users: User[];

  constructor(private userservice : PersonneService) { }

  ngOnInit(): void {
    this.getusers()
  setTimeout(()=> {
    console.log(this.users)
  },2000)  
  }

  getusers() :void{
    this.userservice.getusers()
    .subscribe(
      (res)=> {
        console.log(res)

        this.users= res.map (
        (demand)=> { 
          return {
           
     ...demand.payload.doc.data() as User,
             id : demand.payload.doc.id
          } as User;
        });
      });
    ;

  }

}
