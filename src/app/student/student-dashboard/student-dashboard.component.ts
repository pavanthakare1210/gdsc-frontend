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
  auth: any;

  constructor() { }

  ngOnInit(): void {
    this.auth.role$.subscribe((role: string) => {
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
