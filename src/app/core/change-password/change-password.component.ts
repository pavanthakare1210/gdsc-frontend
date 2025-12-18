import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  username = '';
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';
  message = '';
  isLoading = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.message = ''; 

    if (!this.username || !this.oldPassword || !this.newPassword || !this.confirmPassword) {
      this.message = 'All fields are required.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.message = 'New password and confirm password do not match.';
      return;
    }

    this.isLoading = true;

    this.authService.changePassword({
      username: this.username,
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    }).subscribe({
      next: (res: any) => {
        this.message = 'Password changed successfully!';
        this.isLoading = false;
      },
      error: (err: any) => {
        if (err.status === 401 || err.status === 403) this.message = 'Incorrect current password.';
        else if (err.status === 400) this.message = 'Weak password — follow password policy.';
        else if (err.status === 429) this.message = 'Too many attempts — please try later.';
        else this.message = 'Server error. Try again.';
        this.isLoading = false;
      },
    });
  }
}
