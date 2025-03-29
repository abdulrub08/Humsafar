import { Component } from '@angular/core';
import { LeftnavigationComponent } from '../lefnav/leftnavigation/leftnavigation.component';
import { CompleateInfoComponent } from '../rightnav/compleate-info/compleate-info.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [LeftnavigationComponent, CompleateInfoComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      name: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expirationDate: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      console.log('Card Form Data:', this.cardForm.value);
      // Process payment or handle the form data here
    } else {
      console.error('Form is invalid');
    }
  }

}
