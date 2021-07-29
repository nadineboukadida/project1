import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DemandeModule } from '../model/demande/demande.module';
import { notification, NotificationModule } from '../model/notification/notification.module';
import { User } from './demande.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
notification : BehaviorSubject<notification> = new BehaviorSubject<notification>(null)
pic : BehaviorSubject<string> = new BehaviorSubject<string>("notifgray")

msg: Observable<notification[]>

  constructor(public firebaseAuth : AngularFireAuth ,
    private firestore: AngularFirestore) {

    
   
   }


   updateseen (notif : notification,data,id) {
    return( this.firestore
      .collection("notification")
      .doc(id).collection('all')
      .doc(notif.id)
      .set(data,{ merge: true }))
   }
setnotification (notification :notification) {
  this.notification.next(notification);
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
