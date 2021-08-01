import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
notif : string ='notif';
private position= new BehaviorSubject<string>('home')
  

changeMode1(pos:string){
  this.position.next(pos)
    }
getposition (){
  return this.position.asObservable()
}

  constructor() { 


  }


}
