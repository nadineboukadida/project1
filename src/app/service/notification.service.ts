import { Injectable } from '@angular/core';
import { DemandeModule } from '../model/demande/demande.module';
import { NotificationModule } from '../model/notification/notification.module';
import { PersonneModule } from '../model/personne/personne.module';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications:  NotificationModule[] =[];
  constructor() {
    this.notifications= [
      new NotificationModule( 
        new DemandeModule (0,"test nads",3), new PersonneModule (), new PersonneModule()),
        new NotificationModule( 
          new DemandeModule (0,"test nads",1), new PersonneModule (), new PersonneModule()),
          new NotificationModule( 
            new DemandeModule (0,"test nads",2), new PersonneModule (), new PersonneModule()),
      
        new NotificationModule( 
          new DemandeModule (1,"test nads",4), new PersonneModule (), new PersonneModule())
    ]
   }

  
  getnotifications (){
    return (this.notifications);
  }
  getnumber(){
    return this.notifications.length;
  }
}
