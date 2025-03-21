import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerSectionComponent } from '../../banner/banner-section/banner-section.component';
import { FaqSectionComponent } from '../../Faq/faq-section/faq-section.component';
import { ProfileCardSectionComponent } from '../../profile/profile-card-section/profile-card-section.component';
import { HeaderSectionComponent } from '../../header/header-section/header-section.component';
import { FooterSectionComponent } from '../../footer/footer-section/footer-section.component';
import { CompleteFormComponent } from '../../profile/complete-form/complete-form.component';
import { UserProfileComponent } from '../../user/user-profile/user-profile.component';
import { LandingPageComponent } from '../../landingPage/landing-page/landing-page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BannerSectionComponent,
                FaqSectionComponent,
                ProfileCardSectionComponent,
                HeaderSectionComponent,
                FooterSectionComponent,
                CompleteFormComponent,
                UserProfileComponent,
                LandingPageComponent
  ],
  exports: [HeaderSectionComponent,FooterSectionComponent]
})
export class HomeModule { }
