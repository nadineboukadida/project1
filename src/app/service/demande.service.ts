import { Injectable } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DemandeModule } from '../model/demande/demande.module';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})



export class DemandeService {
  demandes: IDemandes[] =[];
  currentdocid: string;
  history : IDemandes[]=[];
  constructor( public firebaseAuth : AngularFireAuth ,
    public firestore: AngularFirestore, private loginservice : LoginService) {

   
    

   }

   async updateUserData( form) {
    // Sets user data to firestore on login
    // const userRef: AngularFirestoreDocument<IDemandes> = 

    const data = { 
      uid: this.loginservice.userID, 
  name :form.name,
  level : 1,
  type : form.type,
  date : form.date
    } 


  const {id} =await this.firestore.collection('demands').doc(this.loginservice.userID).collection('collection').add(data)
    this.firestore
        .collection("demands")
        .doc(this.loginservice.userID).collection('collection').doc(id).set({docid : id}, { merge: true })

  }
  addDemande (payload : IDemandes){
   this.updateUserData(payload)
  }


 
 
  updatedemande(data:IDemandes,id){
      return( this.firestore
          .collection("demands")
          .doc(this.loginservice.userID).collection('collection')
          .doc(id)
          .set(data,{ merge: true }))
  }
  updatelevel(data:ILevel,demande:IDemandes){
    return( this.firestore
        .collection("demands")
        .doc(demande.uid).collection('collection')
        .doc(demande.docid)
        .set(data,{ merge: true }))
}
updateadmin(data:Iadmin,id){
  return( this.firestore
      .collection("demands")
      .doc(data.uid).collection('collection')
      .doc(id)
      .set(data,{ merge: true }))
}

  getdemand(id){
    return this.firestore.collection('demands').doc(localStorage.getItem('user'))
    .collection('collection').doc(id).valueChanges()
  }
  getdemand1(id,uid){
    return this.firestore.collection('demands').doc(uid)
    .collection('collection').doc(id).valueChanges()
  }


  //  getlist(){
  //    if (!this.userID) return(null);
  //    this.items = this.firestore.collection(`items/${this.userID}`)
  //  }
   
   getdemandes (){
    // this.loginservice.getstate();

}
   
    
   
   gethistory(){
     return this.firestore.collection('demands')
     .doc(localStorage.getItem('user')).collection('collection'
     ,ref=> ref.where("level","==",4)).snapshotChanges()   
   }

   getuserdemandes(id){
    return this.firestore.collection('demands')
    .doc(id)
    .collection('collection' ,ref=> ref.where("level","<",4)).snapshotChanges()
   }

   getuserdemandes1(id:string){
    return this.firestore.collection('demands')
    .doc(id)
    .collection('collection').snapshotChanges()
   }

  //  getdemand (){
  //    return this.firestore.
  //  }
   getprofil (){
    return this.firestore.collection('users').doc(this.loginservice.userID).valueChanges()

   }
   getprofilid (id){
    return this.firestore.collection('users').doc(id).valueChanges()

   }
   getnumber(){
     return this.demandes.length;

}

getuser (id){
  return this.firestore.collection('users')
  .doc(id)
  .valueChanges()

 
}}

export interface User {
  uid ?: string ;
  email : string ; 
  name ?: string;
  gender:string;
  cin?:string;
  phone?:string;
  fcmtokens?:any;
  admin: boolean;
  
}

export interface IDemandes {
  uid?: string ; 
  name:string;
  level : number ;
  type : string;
  date ?: string;
  docid?:string;
  admin?:string
}
export interface ILevel {
  level : number
}

export interface Iadmin {
  level : number,
  admin:string,

  uid:string
}



