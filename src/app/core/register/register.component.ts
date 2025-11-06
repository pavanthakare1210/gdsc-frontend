import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  // Form definition
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  isSubmitting = false;

  // Dummy submit (for UI demo only)
  onSubmit() {
    if (this.registerForm.invalid) return;
    this.isSubmitting = true;

    setTimeout(() => {
      alert('Demo: Registration form submitted!');
      this.registerForm.reset();
      this.isSubmitting = false;
    }, 1000);
  }
}
