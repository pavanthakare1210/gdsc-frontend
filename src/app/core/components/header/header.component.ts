import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService, Role } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() hamburgerClick = new EventEmitter<void>();

  roles: Role[] = ['admin', 'center', 'teacher', 'students'];
  selected: Role = 'admin';
  dark = false;

  constructor(
    private auth: AuthService,
    private theme: ThemeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.roleObservable.subscribe((r: Role) => {
      this.selected = r;
    });

    this.dark = this.theme.isDark();
  }

  onRoleChange() {
    this.auth.setRole(this.selected);
    this.router.navigate([`/dashboard/${this.selected}`]);
  }

  toggleTheme() {
    this.dark = !this.dark;
    this.theme.setDark(this.dark);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
