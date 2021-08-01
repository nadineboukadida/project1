import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DemandeModule } from '../model/demande/demande.module';
import { notification, NotificationModule } from '../model/notification/notification.module';
import { User } from './demande.service';
import { PositionService } from './position.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
notification : BehaviorSubject<notification> = new BehaviorSubject<notification>(null)
pic : BehaviorSubject<string> = new BehaviorSubject<string>("notifgray")
update : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null)

msg: Observable<notification[]>
  position: string;

  constructor(public firebaseAuth : AngularFireAuth ,
    private positionservice: PositionService,
    private firestore: AngularFirestore) {
this.positionservice.getposition().subscribe((e)=> {
  this.position=e;
})
    
   
   }


   updateseen (notif : notification,data,id) {
     if (this.position=="notif")
    return( this.firestore
      .collection("notification")
      .doc(id).collection('all')
      .doc(notif.id)
      .set(data,{ merge: true }))
      else return null
   }
setnotification (notification :notification) {
  this.notification.next(notification);
}
setupdate (e : boolean) {
  this.update.next(e);
}
getupdate () {
 return this.update.asObservable();
}
setpic (pic:string) {
  this.pic.next(pic);
}
  getnotification(){
    return this.notification.asObservable();
  }
 
  getpic(){
    return this.pic.asObservable();
  }

  async sendNotif(user:User, notif : notification) {
    
    const {id} =await this.firestore.collection('notification').doc(user.uid).collection('all').add(notif)
      this.firestore
          .collection("notification")
          .doc(user.uid).collection('all').doc(id).set({id : id}, { merge: true })
  
    }

  
    

}
