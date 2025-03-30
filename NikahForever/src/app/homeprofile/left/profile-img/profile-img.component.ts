import { Component } from '@angular/core';
import { CommonGenericModule } from '../../../shared/common-generic/common-generic.module';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../features/auth/login/login.component';

@Component({
  selector: 'app-profile-img',
  standalone: true,
  imports: [CommonGenericModule],
  templateUrl: './profile-img.component.html',
  styleUrl: './profile-img.component.css'
})
export class ProfileImgComponent {
 
  constructor(public dialog: MatDialog) {}
  openMessageDialog(event: Event) {
    event.preventDefault(); // Prevent anchor navigation
    this.dialog.open(LoginComponent, {
      width: '400px',
      data: { user: 'Abdul Rub' }
    });
  }

  openSearchDialog(event: Event) {
    event.preventDefault();
    alert("Search functionality can be implemented here!");
  }
}
