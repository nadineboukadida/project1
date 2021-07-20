import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeModule } from 'src/app/model/demande/demande.module';
import { DemandeService } from 'src/app/service/demande.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number=0;
 demande : DemandeModule= new DemandeModule();

 selected1 : boolean = false ;
selected2 : boolean = false ;
selected3 : boolean = false ;
selected4 : boolean = false ;
  first: boolean= false;
  second: boolean= false;
  third: boolean= false;
  forth: boolean= false;


  constructor(
    private router: Router,
    private demandeservice : DemandeService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //   (params)=> {
    //   this.id= params.id;
    //   console.log(params.id)
    //   this.demande =this.demandeservice.getdemandesbyid(this.id)[0];
    //   console.log (this.demande);
    //   }
    // )
    //   if (this.demande.types.includes("1")){
    //     // this.first = true ;
    //     this.select1();
       
    //   }
    //    if (this.demande.types.includes("2")){
    //     this.second = true ;
    //     this.select2();
    //   }
    //   if (this.demande.types.includes("3")){
    //     this.third = true ;
    //     this.select3();
    //   }
    //    if (this.demande.types.includes("4")){
    //     this.forth = true ;
    //     this.select4();
    //   }

  }

  select1 (){
    this.selected1=!this.selected1;
  }
  select2 (){
    this.selected2=!this.selected2;
  }
  select3 (){
    this.selected3=!this.selected3;
  }
  select4 (){
    this.selected4=!this.selected4;
  }
}
