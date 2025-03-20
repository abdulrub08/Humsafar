    import { NgModule } from '@angular/core';
import { BannerSectionComponent } from '../banner/banner-section/banner-section.component';
import { FaqSectionComponent } from '../Faq/faq-section/faq-section.component';
import { ProfileCardSectionComponent } from '../profile/profile-card-section/profile-card-section.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CompleteFormComponent } from '../profile/complete-form/complete-form.component';
import { FooterSectionComponent } from '../footer/footer-section/footer-section.component';
import { HeaderSectionComponent } from '../header/header-section/header-section.component';

    
    @NgModule({
      declarations: [],
        imports: [
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
    export class LandingModule {}
    