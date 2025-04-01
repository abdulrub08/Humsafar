import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AlertDialogComponent } from '../../../../modal-box-content/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../../features/auth/login/login.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  constructor(private dialog: MatDialog) {

  }
  openAlertBox(event: Event){
    event.preventDefault(); // Prevents default anchor behavior
    const dialogRef = this.dialog.open(AlertDialogComponent, {
          width: '600px',
          panelClass: 'custom-dialog-alert',
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

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.profile-menu-container')) {
     
    }
  }
}
