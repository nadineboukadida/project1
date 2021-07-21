import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Compte } from '../compte/compte.module';
import { AngularFireAuth } from "@angular/fire/auth";
import { IDemandes, User } from './demande.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  comptes : Compte []=[]
  isLoggedin: boolean=false;
  items: IDemandes[] =[];
  user: Observable<any>
  userID : string= null;

  constructor( public firebaseAuth : AngularFireAuth ,
    private firestore: AngularFirestore) {

    this.firebaseAuth.authState.subscribe(user => {
      if(user) this.userID= user.uid;
    });
    
    this.user= this.firebaseAuth .authState.pipe(switchMap(user => {
      if (user) {
        return this.firestore.doc<User>(`users/${user.uid}`).valueChanges()
      }
      else {
        
        return (null)
      }
    })
      
      )

   }
   get authenticated():boolean {
    return this.userID !==null ;
   }

   updateUserData(user, name : string , gender : string) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = 
    this.firestore.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      name: name ,
      gender : gender
    } 

    return userRef.set(data, { merge: true })

  }

 

  async signin(email : string , pass : string){

  await  this.firebaseAuth.signInWithEmailAndPassword(email,pass)
  .then (res => {
    this.isLoggedin= true ;
  })
  return new Promise((resolve, reject) => {})
    
}

async createUser(email : string , pass : string, name : string, gender : string){
      await  this.firebaseAuth.createUserWithEmailAndPassword(email,pass)
      .then (res => {
        console.log(res.user)
    this.updateUserData(res.user, name, gender)
    this.isLoggedin= true ;
      })
      return new Promise((resolve, reject) => {})
    }

    logout(){
      this.firebaseAuth.signOut();
      localStorage.removeItem('user');
      this.userID=null;
    }
    
    updateProfil(data) {
      return( this.firestore
          .collection("users")
          .doc(this.userID)
          .set(data, { merge: true }))
   }

}