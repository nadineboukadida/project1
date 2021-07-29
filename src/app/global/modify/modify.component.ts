import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { notification } from 'src/app/model/notification/notification.module';
import { AdminService } from 'src/app/service/admin.service';
import { DemandeService, IDemandes, User } from 'src/app/service/demande.service';
import { LoginService } from 'src/app/service/login.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

    id: number=0;
   demande :IDemandes;
  
   selected1 : boolean = false ;
  selected2 : boolean = false ;
  selected3 : boolean = false ;
  selected4 : boolean = false ;
   level2=false;
   level3=false;
   level4=false;
notice=false;
notif : notification

    final: { level: number; };
    type: string="";
  update: { level: number; admin: string;uid:string };
  text: string="loremloremloremloremlorem"
  personne: User;
  
  
    constructor(
      private notificationservice:NotificationService,
      private router: Router,
      private loginservice : LoginService,
      private demandeservice : DemandeService,
      private activatedRoute : ActivatedRoute,
      private adminservice :AdminService
    ) { }
  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        (params)=> {
      this.getdemande(params.id,params.uid);
console.log('params', params)
        }
      )
   
  

        setTimeout(() => {
        }, 2000);
      
    
  
       
  
    }
  
  check(){
    if (this.demande.type.includes("1")){
      this.select1();
     
    }
     if (this.demande.type.includes("2")){
      this.select2();
    }
    if (this.demande.type.includes("3")){
      this.select3();
    }
     if (this.demande.type.includes("4")){
      this.select4();
    }
if (this.demande.level==1)
{this.level2=true}
if (this.demande.level==2&& 
  this.demande.admin == this.loginservice.userID)
{this.level3=true
this.level2=false;

this.level4=true
}
if (this.demande.level==2&& 
  this.demande.admin!== this.loginservice.userID)
{this.level2=false;
  this.level3=false
this.level4=false
this.notice=true;
this.text ="another admin is working on this demand"
}
if (this.demande.level==3&& 
  this.demande.admin!== this.loginservice.userID)
{this.level3=false
this.level2=false;
this.notice=true;
this.text ="another admin is working on this demand"

this.level4=false
}
if (this.demande.level==3&& 
  this.demande.admin== this.loginservice.userID)
{this.level3=false
this.level2=false;

this.level4=true
}
  }



    
   
  
  
  
  
     getdemande(id,uid){
   this.demandeservice.getdemand1(id,uid).subscribe(
      (res:IDemandes) => {
console.log('res', res)
       
        this.demande=res
      }
   
   )
   setTimeout(()=>{ 
   this.check()
   this.getname()
  }, 1000)
  
  
  
   
  };
  
  
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
  
   
   accept(){
     this.level3=false;
    this.final={
     level:3
    }
   this.demandeservice.updatelevel(this.final,this.demande.docid);
   this.notif ={ 
    title :"new update !",
    body : "Request Accepted 🎉 Click to check it out",
     level : 3,
     docid :  this.demande.docid,
     seen : false ,
    date : new Date()
  }
this.notificationservice.sendNotif(this.personne,this.notif)
    console.log('updated')
   }

   close(){
    this.level4=false;

    this.final={
      level:4
     }
    this.demandeservice.updatelevel(this.final,this.demande.docid);
    this.notif ={ 
      title :"new update !",
      body : "Request Closed :) Click to check it out",
       level : 4,
       docid :  this.demande.docid,
       seen : false ,
    date :new Date()

    }
  this.notificationservice.sendNotif(this.personne,this.notif)
  
   }
   workonit(){
    this.level2=false;

     this.level3=true;
     this.level4=true ;
     this.update ={
       uid:this.demande.uid,
       level:2,
       admin: this.loginservice.userID,
       
     }
     this.demandeservice.updateadmin(this.update,this.demande.docid).then(()=> 
    { 
      
      this.notif ={ 
        title :"new update !",
        body : "We are working on your request :) Click to check it out",
         level : 2,
         docid :  this.demande.docid,
         seen : false ,
    date :new Date()

      }
      this.adminservice.addDemandinAdmin(this.demande)
    this.notificationservice.sendNotif(this.personne,this.notif)
    })

   
  }
getname(){
  
  this.demandeservice.getuser(this.demande.uid).subscribe(
      (res:User) =>{ 
        this.personne=res
    
      });

}
}