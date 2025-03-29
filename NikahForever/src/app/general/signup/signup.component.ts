import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonGenericModule } from '../../shared/common-generic/common-generic.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../features/auth/login/login.component';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports:[CommonGenericModule,LoadingSpinnerComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent { 
  isLoading = false;
  error: string = '';
  signupForm: FormGroup;
  constructor(private authService: AuthService,
    private fb: FormBuilder, 
    private dialogRef: MatDialogRef<SignupComponent>,
    private dialoglogin: MatDialog) {
    this.signupForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],      
      mobileno: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    else if (this.signupForm.valid) {
      console.log('Signup Form Data:', this.signupForm.value);
      this.authService.signup(this.signupForm).subscribe(res => {
        console.log(res);
        //this.isLoading = false;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
    this.signupForm.reset();
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

  //#region Login Modal Content
  openLoginDialog(event: Event) {
    event.preventDefault();
    this.signupForm.reset();
    this.dialogRef.close();
    const dialogRef = this.dialoglogin.open(LoginComponent, {
      width: '600px',
      panelClass: 'custom-dialog-login',
      data: { message: 'Hello from AppComponent!' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }
  //#endregion

}
