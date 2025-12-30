import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  stats = [
    { title: 'Total Users', value: 123 },
    { title: 'Centers', value: 24 },
    { title: 'Teachers', value: 18 },
    { title: 'Students', value: 560 }
  ];

  recentActivities = [
    { activity: 'Course Enrollment', user: 'Sarah Johnson', time: '10:24 AM', status: 'Completed' },
    { activity: 'Assignment Submission', user: 'Michael Brown', time: '09:45 AM', status: 'Pending' }
  ];

  notifications = [
    { title: 'System Update', message: 'Maintenance on Saturday at 2 AM.', time: '2 hours ago', read: false, icon: '🔔', color: '#2b6cf6' },
    { title: 'New Course Added', message: '"Advanced Data Science" added.', time: '5 hours ago', read: true, icon: '✅', color: '#12b886' }
  ];

  constructor(public auth: AuthService) {}

  ngOnInit(): void { /* load real data here */ }
}
