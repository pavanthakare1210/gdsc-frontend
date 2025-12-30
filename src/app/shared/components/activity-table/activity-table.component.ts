import { Component, Input } from '@angular/core';

export interface Activity {
  activity: string;
  user: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css']
})
export class ActivityTableComponent {
  @Input() activities: Activity[] = [];
}
