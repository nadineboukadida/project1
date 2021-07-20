import { Component, OnInit } from '@angular/core';
import { NotificationModule } from 'src/app/model/notification/notification.module';
import { NotificationService } from 'src/app/service/notification.service';
import { PositionService } from 'src/app/service/position.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
notifications :NotificationModule[];


  constructor(private positionservice: PositionService, private notificationservice : NotificationService) {
 this.positionservice.changePosition("notif");
 this.notifications= notificationservice.getnotifications();
    


   }

  ngOnInit(): void {
  }

}
