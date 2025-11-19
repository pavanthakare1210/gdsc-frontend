import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CenterService } from '../../services/center.service';

@Component({
  selector: 'app-center-form',
  templateUrl: './center-form.component.html'
})
export class CenterFormComponent {

  form!: FormGroup;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private centerService: CenterService,
   public dialogRef: MatDialogRef<CenterFormComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createForm();

    
    if (data) {
      this.isEdit = true;
      this.form.patchValue(data);
    }
  }

  
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', Validators.required],
      isActive: [true]
    });
  }

  
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.value;

    if (this.isEdit) {
      this.centerService.updateCenter(this.data.id, payload)
        .subscribe({
          next: () => this.dialogRef.close('updated'),
          error: err => console.error(err)
        });
    } else {
      this.centerService.createCenter(payload)
        .subscribe({
          next: () => this.dialogRef.close('saved'),
          error: err => console.error(err)
        });
    }
  }
}
