import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() open = false;
  @Output() closeSidebar = new EventEmitter<void>();

  nav = [
    { label: 'Admin', path: '/dashboard/admin' },
    { label: 'Center', path: '/dashboard/center' },
    { label: 'Teacher', path: '/dashboard/teacher' },
    { label: 'Students', path: '/dashboard/students' }
  ];

  onClose() { this.closeSidebar.emit(); }
}
