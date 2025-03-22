import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports:[
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private authService: AuthService,private fb: FormBuilder, private dialogRef: MatDialogRef<SignupComponent>) {
    this.signupForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],      
      mobileno: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup Form Data:', this.signupForm.value);
      this.dialogRef.close(this.signupForm.value); // Close dialog and pass form data
    }
  }

  onClose() {
    this.dialogRef.close(); // Close dialog without any data
  }

  loginGoogle() {
    this.authService.loginWithGoogle();
  }

  loginFacebook() {
    this.authService.loginWithFacebook();
  }

}
