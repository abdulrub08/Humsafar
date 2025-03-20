import { Component } from '@angular/core';
import { HeaderSectionComponent } from "../../header/header-section/header-section.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LeftnavigationComponent } from "../../landingPage/lefnav/leftnavigation/leftnavigation.component";
import { CompleateInfoComponent } from "../../landingPage/rightnav/compleate-info/compleate-info.component";
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [HeaderSectionComponent, SharedModule, LeftnavigationComponent, CompleateInfoComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
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
