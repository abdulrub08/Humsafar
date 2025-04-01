import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-user-login-pic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-login-pic.component.html',
  styleUrl: './user-login-pic.component.css'
})
export class UserLoginPicComponent {
isMenuVisible = false;
  constructor(private router: Router,private authService:AuthService) {}
  showMenu() {
    this.isMenuVisible = true;
  }
  hideMenu() {
      this.isMenuVisible = false;
    }
    goToAccount() {
      this.router.navigate(['/account']);
    }
  
    goToSettings() {
      this.router.navigate(['/settings']);
    }
    logout() {
     this.authService.logout();
     window.location.reload(); // Ensure UI updates
    }
    // Close dropdown when clicking outside
    @HostListener('document:click', ['$event'])
    clickOutside(event: Event) {
      if (!(event.target as HTMLElement).closest('.profile-menu-container')) {
        this.isMenuVisible = false;
      }
    }
}
