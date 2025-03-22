import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-test',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  template: `
    <h1 mat-dialog-title>Modal Title</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Close</button>
      <button mat-button color="primary" (click)="confirm()">Confirm</button>
    </div>
  `,
})
export class DialogTestComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
