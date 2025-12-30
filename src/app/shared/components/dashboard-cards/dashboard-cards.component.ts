import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent {

  totalUsers = 1254;
  totalCourses = 48;
  performance = 92;
  pendingTasks = 12;

}
