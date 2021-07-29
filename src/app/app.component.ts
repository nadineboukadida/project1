import { Component, OnInit } from '@angular/core';
import * as _ from 'animejs'
import { Notice, NoticesService } from './service/notices.service';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { NotificationService } from './service/notification.service';
import { LoginService } from './service/login.service';
import { filter, take } from 'rxjs/operators';
import { PositionService } from './service/position.service';
import { NotificationComponent } from './global/notification/notification.component';
import { notification } from './model/notification/notification.module';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  table : notification[]
notifications = new BehaviorSubject<notification[]>(null)

  currentnotifs = this.notifications.asObservable();

  update: notification[];
  title = 'final';
  
  notices:Notice[]=[]
  hide: boolean;
  position: string;
  data: { seen: boolean; };


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
  constructor(
    private positionservice : PositionService,
    private notificationservice : NotificationService,
    private loginservice: LoginService,
    public firebaseAuth : AngularFireAuth ,
    private firestore: AngularFirestore,
    private noticeservice : NoticesService){

      this.positionservice.currentpos.subscribe((pos)=> {
        this.position = pos;
        console.log('pooooooooooooooooooooooos',pos)
        if (pos=="notif"){
          this.notificationservice.setpic("notif")

        }
        else {
          this.notificationservice.setpic("notifgray")
        }
      
      })


      this.currentnotifs.subscribe((n)=> {
        if (n) {
          if (n.filter((notif)=> (notif.seen==false)).length>0){
            console.log("waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            console.log(n.filter((notif)=> (notif.seen==false)))
            this.notificationservice.setpic("notif1")
          }
        else {
      if (this.position=="notif")
      this.notificationservice.setpic("notif")
          else {
      this.notificationservice.setpic("notifgray")

          }
        }
        }}
      )

        this.getnotif();

      
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
