import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
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

        // SAVE TOKEN + USER INFO
        this.authService.saveLoginData(res);

        this.successMsg = 'Login Successful! Redirecting...';

        const roles = res?.data?.roles || [];

setTimeout(() => {
  if (roles.includes('ROLE_ADMIN')) {
    this.router.navigate(['/admin']);
  } 
  else if (roles.includes('ROLE_CENTER')) {
    this.router.navigate(['/center']);
  } 
  else if (roles.includes('ROLE_TEACHER')) {
    this.router.navigate(['/teacher']);
  } 
  else if (roles.includes('ROLE_STUDENT')) {
    this.router.navigate(['/student']);
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
