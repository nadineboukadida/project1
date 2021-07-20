import { Injectable } from '@angular/core';
import { PersonneModule } from '../model/personne/personne.module';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  personnes: PersonneModule[] =[];
  constructor() { }

  getpersonnes (){
    return (this.personnes);
  }
  getnumber(){
    return this.personnes.length;
  }
}
