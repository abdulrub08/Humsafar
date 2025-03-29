import { Component } from '@angular/core';
import { ProfileListComponent } from "../../profile-list/profile-list.component";

@Component({
  selector: 'app-cat-wise-profiles',
  standalone: true,
  imports: [ProfileListComponent],
  templateUrl: './cat-wise-profiles.component.html',
  styleUrl: './cat-wise-profiles.component.css'
})
export class CatWiseProfilesComponent {

}
