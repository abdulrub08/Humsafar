import { Component } from '@angular/core';
import { ProfileMenuHeadComponent } from "../../../../homeprofile/top/profile-menu-head/profile-menu-head.component";

@Component({
  selector: 'app-header-login',
  standalone: true,
  imports: [ProfileMenuHeadComponent],
  templateUrl: './header-login.component.html',
  styleUrl: './header-login.component.css'
})
export class HeaderLoginComponent {

}
