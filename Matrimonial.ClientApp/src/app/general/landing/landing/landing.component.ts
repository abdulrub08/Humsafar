import { Component } from '@angular/core';
import { SlideBannerComponent } from '../../banner/slide-banner/slide-banner.component';
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { UsersComponent } from "../users/users.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SlideBannerComponent, ProfileCardComponent, UsersComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
