import { Component } from '@angular/core';
import { CatWiseProfilesComponent } from "./right/cat-wise-profiles/cat-wise-profiles.component";
import { ProfileCardComponent } from '../general/landing/profile-card/profile-card.component';
import { FakeComponent } from './fake/fake.component';
import { ProfileMenuComponent } from "./left/profile-menu/profile-menu.component";

@Component({
  selector: 'app-home-profile',
  standalone: true,
  imports: [CatWiseProfilesComponent, ProfileCardComponent, FakeComponent, ProfileMenuComponent],
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.css'
})
export class HomeProfileComponent {

}
