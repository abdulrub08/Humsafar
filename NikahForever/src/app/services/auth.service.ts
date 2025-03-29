import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { User } from '../model/user.model';

export interface AuthResponseData {
  roles: string;
  id:string;
  userName: string;
  email: string;
  token: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>();
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  loginWithGoogle() {
    console.log("this.apiUrl :-"+this.apiUrl);
    window.location.href = `${this.apiUrl}auth/login-google`;
  }

  loginWithFacebook() {
    window.location.href = `${this.apiUrl}auth/login-facebook`;
  }

  signup(formgroup: FormGroup) {
    return this.http
      .post<AuthResponseData>(
        `${this.apiUrl}auth/register`,
        {
        "firstName": formgroup.value.fullname,
        "lastName": formgroup.value.fullname,
        "email": formgroup.value.email,
        "userName": formgroup.value.email,
        "password": formgroup.value.password,
        "phone": formgroup.value.mobileno.toString()
        }
      )
      .pipe(
        catchError(errorRes => {
          let errorMessage = 'An unknown error occurred!';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already';
          }
          return throwError(errorMessage);
        })
      );
  }

  login(loginformdata: FormGroup) {
    return this.http
      .post<AuthResponseData>(
        `${this.apiUrl}auth/login`,
        {
          email: loginformdata.value.email,
          password: loginformdata.value.password
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.id,
            +resData.expiresIn
          );
        })
      );
  }

  // Function to check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user'); // Check if token exists
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  login_Old(token: string) { 
    localStorage.setItem('token', token); 
  }
  //logout() { localStorage.removeItem('token'); this.router.navigate(['/login']); }
  isAuthenticated(): boolean { return !!localStorage.getItem('token'); }
  getToken(): string | null { return localStorage.getItem('token'); }
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.type) {
      case 'NotFoundException':
        errorMessage = errorRes.error.title.toString();
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
