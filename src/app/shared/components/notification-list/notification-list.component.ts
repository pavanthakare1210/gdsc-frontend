import { Component, Input } from '@angular/core';
import { NotificationItem } from '../../models/notification.model';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  
  @Input() notifications: NotificationItem[] = [];

}
