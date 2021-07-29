import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {
  private notice = new BehaviorSubject<Notice>({msg:"",valid:true})
  currentnotice = this.notice.asObservable();

  
  constructor() { }


  
  changeMode(msg:Notice){
    this.notice.next(msg)
      }
}


export interface Notice {
  msg:string 
  valid?:boolean
  admin?:true
  color ?: string
}
