import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-menu-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-menu-head.component.html',
  styleUrl: './profile-menu-head.component.css'
})
export class ProfileMenuHeadComponent {
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
