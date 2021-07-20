import { Injectable } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DemandeModule } from '../model/demande/demande.module';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})



export class DemandeService {
  demandes: IDemandes[] =[];

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

   updateUserData( form) {
    // Sets user data to firestore on login
    // const userRef: AngularFirestoreDocument<IDemandes> = 

    const data = { 
      uid: this.loginservice.userID, 
  name :form.name,
  level : 1,
  type : form.type,
  date : form.date
    } 

  return this.firestore.collection('demands').doc(this.loginservice.userID).collection('collection').add(data)


  }
  addDemande (payload : IDemandes){
   this.updateUserData(payload)
  }




  //  getlist(){
  //    if (!this.userID) return(null);
  //    this.items = this.firestore.collection(`items/${this.userID}`)
  //  }
   
   getdemandes (){
    return this.firestore.collection('demands').doc(this.loginservice.userID).collection('collection').snapshotChanges()
  
   }
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
  date ?: Timestamp<any>;
}


