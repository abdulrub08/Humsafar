import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  loginWithGoogle() {
    console.log("this.apiUrl :-"+this.apiUrl);
    window.location.href = `${this.apiUrl}auth/login-google`;
  }

  loginWithFacebook() {
    window.location.href = `${this.apiUrl}auth/login-facebook`;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  login(token: string) { localStorage.setItem('token', token); }
  //logout() { localStorage.removeItem('token'); this.router.navigate(['/login']); }
  isAuthenticated(): boolean { return !!localStorage.getItem('token'); }
  getToken(): string | null { return localStorage.getItem('token'); }
}
