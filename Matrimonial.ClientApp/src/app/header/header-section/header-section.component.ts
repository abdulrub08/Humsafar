import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SignupComponent } from '../../signup/signup/signup.component';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css'
})
export class HeaderSectionComponent {
  isMenuOpen = false;
  constructor(private dialog: MatDialog,private dialog2: MatDialog) {}

  // openSignupDialog() {
  //   const dialogRef = this.dialog2.open(ModalContentComponent, {
  //     width: '400px',
  //     data: { message: 'Hello from AppComponent!' }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('Dialog closed with result:', result);
  //   });
  // }

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
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
