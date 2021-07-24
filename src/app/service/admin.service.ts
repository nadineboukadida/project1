import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
private inAdmin = new BehaviorSubject<boolean>(false)
currentmode = this.inAdmin.asObservable();

  constructor() { }

  changeMode(statut){
this.inAdmin.next(statut)
  }
  
  
}
