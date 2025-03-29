import { Component,Inject, OnInit  } from '@angular/core';
import { AuthService,AuthResponseData } from '../../../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonGenericModule } from '../../../shared/common-generic/common-generic.module';
import { LoadingSpinnerComponent } from '../../../shared/loading-spinner/loading-spinner.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonGenericModule,LoadingSpinnerComponent, MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {  
  isLoading = false;
  error: string = '';
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private router: Router,
    private authService: AuthService) {      
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
  loginGoogle() {
    this.authService.loginWithGoogle();
  }

  loginFacebook() {
    this.authService.loginWithFacebook();
  }

  close(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    else if (this.loginForm.valid) {
      this.isLoading = true; 
      let authObs: AuthResponseData;
      this.authService.login(this.loginForm).subscribe(res => {
        console.log(res);
        this.isLoading = false;
        authObs = res;
        this.loginForm.reset();
        this.dialogRef.close(this.loginForm.value); // Close dialog and pass form data
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/dashboard']); 
        window.location.reload(); // Ensure UI updates
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    }
  }

}
