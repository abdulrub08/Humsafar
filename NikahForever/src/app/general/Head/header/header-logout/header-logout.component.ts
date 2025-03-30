import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../../services/auth.service';
import { SignupComponent } from '../../../signup/signup.component';
import { LoginComponent } from '../../../../features/auth/login/login.component';
import { CommonGenericModule } from '../../../../shared/common-generic/common-generic.module';

@Component({
  selector: 'app-header-logout',
  standalone: true,
  imports: [CommonGenericModule],
  templateUrl: './header-logout.component.html',
  styleUrl: './header-logout.component.css'
})
export class HeaderLogoutComponent implements OnInit{
  isMenuOpen = false;
  isLoggedIn = false;
  constructor(private dialog: MatDialog,private authService: AuthService) {
    
  }
  ngOnInit(): void {
  }
  openSignupDialog() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User signed up with:', result);
      } else {
        console.log('Signup dialog was closed without signing up');
      }
    });
  }
  openLoginDialog(event: Event){
    event.preventDefault(); // Prevents default anchor behavior
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
      panelClass: 'custom-dialog-login',
      data: { message: 'Hello from HeaderCMP!' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User Logged in with:', result);
      } else {
        console.log('Login dialog was closed without loging');
      }
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
