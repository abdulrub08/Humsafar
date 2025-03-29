import { Component } from '@angular/core';
import { ProfileMenuComponent } from "./left/profile-menu/profile-menu.component";
import { CatWiseProfilesComponent } from "./right/cat-wise-profiles/cat-wise-profiles.component";

@Component({
  selector: 'app-home-profile',
  standalone: true,
  imports: [ProfileMenuComponent, CatWiseProfilesComponent],
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.css'
})
export class HomeProfileComponent {

}
