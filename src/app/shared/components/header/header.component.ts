import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile = false;

  selectedRole = 'admin';
  darkTheme = false;

  ngOnInit(): void {
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  changeRole(): void {
    console.log('Role changed to:', this.selectedRole);
    // Later you can add routing logic here
  }

  toggleTheme(): void {
  this.darkTheme = !this.darkTheme;

  if (this.darkTheme) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

}