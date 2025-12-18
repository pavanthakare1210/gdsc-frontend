import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  stats = [
    { title: 'Assigned Courses', value: 6 },
    { title: 'Students', value: 180 },
    { title: 'Attendance', value: '92%' },
    { title: 'Schedule', value: 4 }
  ];

  recentActivities = [
    { activity: 'Assignment Reviewed', user: 'You', time: 'Today', status: 'Completed' }
  ];

  notifications = [
    { title: 'New Message', message: 'Parent message about assignment.', time: '1 hour ago', read: false, icon: '✉️', color: '#0ea5e9' }
  ];

  constructor(public auth: AuthService) {}
  ngOnInit(): void {}
}
