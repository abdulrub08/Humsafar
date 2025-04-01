import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatInboxDialogComponent } from '../../../../modal-box-content/chat-inbox-dialog/chat-inbox-dialog.component';

@Component({
  selector: 'app-chat-inbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-inbox.component.html',
  styleUrl: './chat-inbox.component.css'
})
export class ChatInboxComponent {
  isVisibleAlert:boolean=false;
  constructor(private dialog: MatDialog) {}
  openAlertBox(event: Event) {
    event.preventDefault(); // Prevents default anchor behavior
    const dialogRef = this.dialog.open(ChatInboxDialogComponent, {
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
  // openAlertBox(event: Event){
  //   event.preventDefault(); // Prevents default anchor behavior
  //   this.isVisibleAlert=!this.isVisibleAlert;
  // }

  // @HostListener('document:click', ['$event'])
  // clickOutside(event: Event) {
  //   if (!(event.target as HTMLElement).closest('.profile-menu-container')) {
  //     this.isVisibleAlert = !this.isVisibleAlert;
  //   }
  // }

}
