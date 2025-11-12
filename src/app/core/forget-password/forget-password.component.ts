import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgotPasswordComponent {
  email = '';
  message = ''; 

  constructor(private authservice:AuthService) {}

  onSubmit() {
    if(! this.email){
      this.message='Please enter your email.';
      return;
    }
    this.authservice.forgotPassword(this.email).subscribe({
  next:(res)=>{
    this.message=res.message||'PAssword reset link send to your mail.';
  },
  error:(err)=>{
    this.message=err.error.message||'Error sending reset link.';
  }
})
  }
}

