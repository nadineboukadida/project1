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
    private firestore: AngularFirestore, private loginservice : LoginService) {

   
    
    this.loginservice.user= this.firebaseAuth .authState.pipe(switchMap(user => {
      if (user) {
        return this.firestore.doc<IDemandes>( `demands/${user.uid}`).valueChanges ()
      }
      else {
        return (null)
      }
    })
      
      )

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

  getdemand(id){
    return this.firestore.collection('demands').doc(this.loginservice.userID)
    .collection('collection').doc(id).valueChanges(
    )
  }

  //  getlist(){
  //    if (!this.userID) return(null);
  //    this.items = this.firestore.collection(`items/${this.userID}`)
  //  }
   
   getdemandes (){
    return this.firestore.collection('demands')
    .doc(this.loginservice.userID)
    .collection('collection' ,ref=> ref.where("type","<","4")).snapshotChanges()
  
   }
   gethistory(){
     return this.firestore.collection('demands')
     .doc(this.loginservice.userID).collection('collection'
     ,ref=> ref.where("type","==","4")).snapshotChanges()   
   }

   getuserdemandes(id){
    return this.firestore.collection('demands')
    .doc(id)
    .collection('collection' ,ref=> ref.where("type","<","4")).snapshotChanges()
   }

  //  getdemand (){
  //    return this.firestore.
  //  }
   getprofil (){
    return this.firestore.collection('users').doc(this.loginservice.userID).valueChanges()

   }
   getnumber(){
     return this.demandes.length;

}}

export interface User {
  uid ?: string ;
  email : string ; 
  name ?: string;
  gender:string;
  cin?:string;
  phone?:string
  // 
}

export interface IDemandes {
  id?: string ; 
  name :string;
  level : number ;
  type : string;
  date ?: string;
  docid?:string
}


