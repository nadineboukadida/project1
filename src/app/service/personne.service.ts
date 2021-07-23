import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { PersonneModule } from '../model/personne/personne.module';
import { User } from './demande.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  personnes: User[] =[];
  constructor(public firebaseAuth : AngularFireAuth ,
    private firestore: AngularFirestore,private loginservice: LoginService) { }

  getusers () {
      return this.firestore.collection('users').snapshotChanges()
  }
 






}
