import { Component, OnInit } from '@angular/core';
import { SlideBannerComponent } from '../../banner/slide-banner/slide-banner.component';
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { UsersComponent } from "../users/users.component";
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';
import { LoginComponent } from '../../../features/auth/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SlideBannerComponent, ProfileCardComponent, UsersComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent  implements OnInit {
  constructor(public dialog: MatDialog,private router: Router,
      private authService: AuthService
    ) {}
    ngOnInit(): void {
      if (this.authService.isLoggedIn()) {
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
      }else{        
        this.router.navigate(['/profile']);
      }
  }
}
