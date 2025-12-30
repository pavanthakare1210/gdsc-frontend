import { Component } from '@angular/core';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent {
  stats = [
    { title: 'Total Users', subtitle: 'All platform users', value: 123 },
    { title: 'Courses', subtitle: 'Available courses', value: 24 },
    { title: 'Performance', subtitle: 'Overall system', value: '85%' },
    { title: 'Pending Tasks', subtitle: 'Tasks requiring attention', value: 7 }
  ];

  recentActivities = [
    { activity: 'Course Enrollment', user: 'Sarah Johnson', time: '10:24 AM', status: 'Completed' },
    { activity: 'Assignment Submission', user: 'Michael Brown', time: '09:45 AM', status: 'Pending' },
    { activity: 'Grade Update', user: 'Dr. Wilson', time: 'Yesterday', status: 'Completed' },
    { activity: 'New User Registration', user: 'Emma Davis', time: 'Yesterday', status: 'Completed' }
  ];

  notifications = [
    { title: 'System Update', message: 'Maintenance on Saturday at 2 AM.', time: '2 hours ago', icon: '🔔', color: '#2b6cf6', read: false },
    { title: 'New Course Added', message: '"Advanced Data Science" added.', time: '5 hours ago', icon: '✅', color: '#12b886', read: true },
    { title: 'Deadline Approaching', message: 'Assignment due in 2 days.', time: '1 day ago', icon: '⚠️', color: '#ff6b8a', read: false }
  ];

  designImage = '/mnt/data/34fcf025-a64d-4a89-a874-a7b8f138841f.png';
}
