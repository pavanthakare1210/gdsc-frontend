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

    this.authService.login(this.loginData).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);

        this.successMsg = 'Login Successful! Redirecting...';

        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1500);
      },
      err => {
        this.errorMsg = 'Invalid username or password';
      }
    );
  }
}
