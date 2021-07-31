import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { notification, NotificationModule } from 'src/app/model/notification/notification.module';
import { IDemandes } from 'src/app/service/demande.service';
import { NotificationService } from 'src/app/service/notification.service';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
notifications = new BehaviorSubject<notification[]>(null)
notificationSub : Subscription;
  data: {seen:boolean}
table : notification[]
  currentnotifs = this.notifications.asObservable();
  update: notification[];
  position: string;

  constructor(
    private notificationservice: NotificationService,
    private positionservice: PositionService,
    public firebaseAuth : AngularFireAuth ,
    private firestore: AngularFirestore
    ) 
    {
 
   }


  ngOnInit(): void {
    this.currentnotifs.subscribe(n => {
      if (n) 
      this.table=n})

      
      this.positionservice.currentpos.subscribe((pos)=>
       {this.position=pos
        if (pos=="notif"){
    this.currentnotifs.subscribe((n)=> {
      if(n){
      n.forEach((e)=> {
  if (e.seen==false){
    console.log('changing')

        this.data ={
          seen : true
        }
        this.notificationservice.updateseen(e,this.data,localStorage.getItem('user'))
       } })
    }})
      }
        })
        this.getnotif();
    this.checkseen();

    
     

}
  
checkseen() {

  this.currentnotifs.subscribe((n)=> {
    if (n) {
      if (n.filter((notif)=> (!notif.seen)).length>0){

      }
    }
  })

}
  getnotif (){
    this.firebaseAuth.authState.subscribe(
      (user) => {
             if (user) {
        return this.firestore.collection("notification")
        .doc(user.uid).collection('all',ref=> ref.orderBy("date","desc")).snapshotChanges().subscribe(
          (res)=> {
            if(res){     
            this.update=res.map (
            (demand)=> { 
              return {
         ...demand.payload.doc.data() as notification,
                 id : demand.payload.doc.id
              } as notification;
            })
            this.updatenotifs(this.update)
          }})}
      else {
        
        return (null)
      }}
    )
  }


   updatenotifs(notif:notification[]){
    this.notifications.next(notif)
      }

   
}
