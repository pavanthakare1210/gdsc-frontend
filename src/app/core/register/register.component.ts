import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  routerLink: any;
  Router: any;
  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {}

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  isSubmitting = false;
  apiResponse: any = null; 

  onSubmit() {
    if (this.registerForm.invalid) return;

    this.isSubmitting = true;
    this.apiResponse = null;

    const apiUrl = 'http://localhost:8080/api/auth/register';

    this.http.post(apiUrl, this.registerForm.value, { observe: 'response' })
      .subscribe({
        next: (res) => {
        alert("Registration Successful!");
          this.apiResponse = res.body;
          this.isSubmitting = false;
          this.registerForm.reset();
        },
        error: (err) => {
          alert("User already exists...!");
            this.router.navigate(['/forgot-password']);
          this.apiResponse = err.error;
          this.isSubmitting = false;
         
        }
      });
  }
}
