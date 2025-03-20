import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderSectionComponent } from './header/header-section/header-section.component';
import { FooterSectionComponent } from './footer/footer-section/footer-section.component';
import { BannerSectionComponent } from './banner/banner-section/banner-section.component';
import { FaqSectionComponent } from './Faq/faq-section/faq-section.component';
import { ProfileCardSectionComponent } from './profile/profile-card-section/profile-card-section.component';
import { RouterOutlet } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserProfileComponent } from "./user/user-profile/user-profile.component";
import { CompleteFormComponent } from "./profile/complete-form/complete-form.component";
import { LandingPageComponent } from './landingPage/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { LandingModule } from './landingPage/landing.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    LandingModule,
    AppRoutingModule,
    HttpClientModule
],
  providers: [AuthService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
