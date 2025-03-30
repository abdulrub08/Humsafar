import { Component } from '@angular/core';
import { ProfileImgComponent } from "../profile-img/profile-img.component";

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [ProfileImgComponent],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.css'
})
export class ProfileMenuComponent {
constructor(){
  console.log('load');
}
}
