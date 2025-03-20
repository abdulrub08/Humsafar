import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (user) return true;
    
    this.router.navigate(['/login']);
    return false;
  }
}
// Compare this snippet from src/app/signup/signup/signup.component.ts:
// import { Component } from '@angular/core';