import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  stats = [
    { title: 'Courses Enrolled', value: 4 },
    { title: 'Assignments', value: 3 },
    { title: 'Grades', value: 'B+' },
    { title: 'Attendance', value: '88%' }
  ];

  recentActivities = [
    { activity: 'Assignment Submitted', user: 'You', time: 'Today', status: 'Completed' }
  ];

  notifications = [
    { title: 'Upcoming Exam', message: 'Exam next week.', time: '2 days ago', read: false, icon: '📚', color: '#ef4444' }
  ];

  constructor(public auth: AuthService) {}
  ngOnInit(): void {}
}
