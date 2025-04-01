import { Component } from '@angular/core';
import { UserLoginPicComponent } from "../../../../homeprofile/top/profile-menu-head/user-login-pic/user-login-pic.component";
import { AlertComponent } from "../../../../homeprofile/top/profile-menu-head/alert/alert.component";
import { ChatInboxComponent } from '../../../../homeprofile/top/profile-menu-head/chat-inbox/chat-inbox.component';

@Component({
  selector: 'app-header-login',
  standalone: true,
  imports: [UserLoginPicComponent, AlertComponent,ChatInboxComponent],
  templateUrl: './header-login.component.html',
  styleUrl: './header-login.component.css'
})
export class HeaderLoginComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
