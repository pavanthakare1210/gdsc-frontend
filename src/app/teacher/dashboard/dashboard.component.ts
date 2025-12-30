import { Component } from '@angular/core';
@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class TeacherDashboardComponent {
  stats = [
    { title: 'Assigned Courses', subtitle: 'Courses you teach', value: 6 },
    { title: 'Students', subtitle: 'Active students', value: 180 },
    { title: 'Attendance', subtitle: 'Attendance rate', value: '92%' },
    { title: 'Schedule', subtitle: 'Upcoming sessions', value: 4 }
  ];

  recentActivities = [
    { activity: 'Assignment Reviewed', user: 'You', time: 'Today', status: 'Completed' }
  ];

  notifications = [
    { title: 'New Message', message: 'Parent message about assignment.', time: '1 hour ago', icon: '✉️', color: '#0ea5e9' }
  ];
}
