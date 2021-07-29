import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
notif : string ='notif';
private position= new BehaviorSubject<string>('home')
currentpos= this.position.asObservable();
  
changeMode(pos:string){
  this.position.next(pos)
    }


  constructor() { 


  }


}
