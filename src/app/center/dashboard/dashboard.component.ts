import { Component } from '@angular/core';
@Component({
  selector: 'app-center-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class CenterDashboardComponent {
  stats = [
    { title: 'Instructors', subtitle: 'Active instructors', value: 12 },
    { title: 'Rooms', subtitle: 'Available rooms', value: 8 },
    { title: 'Schedules', subtitle: 'Upcoming sessions', value: 16 },
    { title: 'Students', subtitle: 'Total students', value: 230 }
  ];

  recentActivities = [
    { activity: 'Room Booking', user: 'Center Admin', time: '11:20 AM', status: 'Completed' },
    { activity: 'Instructor Joined', user: 'Alex Green', time: 'Yesterday', status: 'Completed' }
  ];

  notifications = [
    { title: 'Maintenance', message: 'Projector maintenance on Sunday.', time: '3 hours ago', icon: '🛠️', color: '#f59e0b' }
  ];
}
