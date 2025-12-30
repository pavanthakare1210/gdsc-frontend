import { Component } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  };

  successMsg = '';
  errorMsg = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    this.successMsg = '';
    this.errorMsg = '';

    this.authService.login(
      this.loginData.username,
      this.loginData.password
    ).subscribe(
      (res: any) => {

        // Store token, roles, username
        this.authService.saveLoginData(res);

        this.successMsg = 'Login Successful! Redirecting...';

        const roles = res?.data?.roles || [];

        setTimeout(() => {
          // ROLE-BASED REDIRECT
          if (roles.includes('ROLE_ADMIN')) {
            this.router.navigate(['/dashboard/admin']);
          } 
          else if (roles.includes('ROLE_CENTER')) {
            this.router.navigate(['/dashboard/center']);
          } 
          else if (roles.includes('ROLE_TEACHER')) {
            this.router.navigate(['/dashboard/teacher']);
          } 
          else if (roles.includes('ROLE_STUDENT')) {
            this.router.navigate(['/dashboard/student']);
          } 
          else {
            this.router.navigate(['/']);
          }
        }, 800);
      },
      err => {
        console.error(err);
        this.errorMsg = 'Invalid username or password';
      }
    );
  }
}
