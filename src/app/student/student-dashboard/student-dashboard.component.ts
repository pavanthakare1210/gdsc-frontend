import { Component, OnInit } from '@angular/core';
import { AuthService, Role } from '../../core/services/auth.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  darkMode = false;
  isSidebarCollapsed = false;
  role: string = 'students';

  constructor() { }

  ngOnInit(): void {
    this.auth.role$.subscribe(role => {
      this.role = role;
    });
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

}
