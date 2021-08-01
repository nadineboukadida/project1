import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Compte } from '../compte/compte.module';
import { AngularFireAuth } from "@angular/fire/auth";
import { IDemandes, User } from './demande.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NoticesService } from './notices.service';
import { PositionService } from './position.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  comptes : Compte []=[]
  isLoggedin: boolean=false;
  items: IDemandes[] =[];
  user: Observable<User>
  userID : string= null;
  valid: any;

  constructor( public firebaseAuth : AngularFireAuth ,
    private firestore: AngularFirestore, private noticeservice:NoticesService
    , private positionservice : PositionService,private router : Router) {

    this.user= this.firebaseAuth.authState.pipe(switchMap(user => {
        if (user) {
          this.userID=user.uid
          return this.firestore.doc<User>( `users/${user.uid}`).valueChanges ()
        }
        else {
          return (null)
        }
      })
        
        )
    
        this.firebaseAuth.authState.subscribe((res)=>
        this.valid=res )

    }


   get authenticated():boolean {
   return  !(this.valid==null)
   }

   updateUserData(user, name : string , gender : string) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = 
    this.firestore.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      name: name ,
      gender : gender,
      admin : false
    } 

    return userRef.set(data, { merge: true })

  }













  

 

  async signin(email : string , pass : string){

  await  this.firebaseAuth.signInWithEmailAndPassword(email,pass)
  .then (res => {
 this.firebaseAuth.authState.subscribe(user => {
  if(user)
  {
localStorage.setItem('user',user.uid) 
this.userID= localStorage.getItem('user');
this.noticeservice.changeMode({msg :"you just logged in ! welcome :)",valid :true})
this.positionservice.changeMode1("home")
this.router.navigate(['/home'])
}



})
  },
  (err) =>{
if (err.code =="auth/user-not-found")
this.noticeservice.changeMode({msg:"No corresponding user ! please check your email and password", 
valid  :false})

else if (err.code =="auth/wrong-password")
this.noticeservice.changeMode({msg:"Invalid Password", 
valid  :false})

else if (err.code =="auth/too-many-requests")
this.noticeservice.changeMode({msg:"Access to this account has been temporarily disabled, please try again later", 
valid  :false})
else {
  this.noticeservice.changeMode({msg:err.message , 
valid  :false})
}
  })

  
    
}

async createUser(email : string , pass : string, name : string, gender : string){
      await  this.firebaseAuth.createUserWithEmailAndPassword(email,pass)
      .then (res => {
        console.log(res)
    this.updateUserData(res.user, name, gender)
    this.isLoggedin= true ;
    this.noticeservice.changeMode({msg:"Account created successfully ✨! Welcome", 
      valid  :true})}
      
      ,(err)=>{
        
          if (err.code =="auth/weak-password")
          this.noticeservice.changeMode({msg:err.message, 
          valid  :false})
           else if (err.code =="auth/invalid-email")
          this.noticeservice.changeMode({msg:err.message, 
          valid  :false})
          else if (err.code ="auth/email-already-in-use")
            this.noticeservice.changeMode({msg:err.message , 
          valid  :false})
      }
      )
    
    }

    logout(){
      this.firebaseAuth.signOut();
      localStorage.removeItem('user');
      this.userID=null;
  this.noticeservice.changeMode({msg:"disconnected successfully ! See you soon :)", valid  :true})

    }
    
    updateProfil(data) {
      return( this.firestore
          .collection("users")
          .doc(this.userID)
          .set(data, { merge: true }))

          
   }
   updateProfil1(data,id:string) {
    return( this.firestore
        .collection("users")
        .doc(id)
        .set(data, { merge: true }))
 }

}