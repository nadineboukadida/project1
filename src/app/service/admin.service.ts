import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDemandes } from './demande.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
private inAdmin = new BehaviorSubject<boolean>(false)
currentmode = this.inAdmin.asObservable();
demand : IDemandes[]
public array1:IDemandes[];

  constructor(public firebaseAuth : AngularFireAuth ,
    private firestore: AngularFirestore, private loginservice : LoginService) { }

  changeMode(statut){
this.inAdmin.next(statut)
  }
  
  
  
  getadmin (){
 
      return this.firestore.collection('admin').doc(localStorage.getItem('user'))
      .collection('collection').snapshotChanges()
    
  }

async addDemandinAdmin (form: IDemandes){
    
    const data = { 
  docid : form.docid,
  uid:form.uid,
  level : form.level,
  type : form.type,
  name : form.name
    } 

  this.firestore.collection('admin').doc(this.loginservice.userID)
  .collection('collection').add(data)
   }

  
}
