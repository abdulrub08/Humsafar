import { Component } from '@angular/core';
import { BannerSectionComponent } from "../../banner/banner-section/banner-section.component";
import { FaqSectionComponent } from "../../Faq/faq-section/faq-section.component";
import { ProfileCardSectionComponent } from "../../profile/profile-card-section/profile-card-section.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BannerSectionComponent, FaqSectionComponent, ProfileCardSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
