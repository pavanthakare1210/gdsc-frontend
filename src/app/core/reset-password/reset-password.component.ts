import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  password: string = '';
  message: string = '';
  token: string = '';

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit():void{
    this.token=this.route.snapshot.paramMap.get('token')||'';
  }
  onSubmit() {
    if (!this.password) {
      this.message = 'Please enter a new password.';
      return;
    }

    this.authService.resetPassword(this.token,this.password).subscribe({
      next:(res)=>{
        this.message=res.message||'Password reset successfully.';
      },
      error:(err)=>{
        this.message=err.error.message||'Error resetting password.';
      }
    })
      
  }
}
