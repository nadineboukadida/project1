import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
position :string = "home"
  constructor() { 


  }
changePosition (position  :string){
  this.position = position ;
}

}
