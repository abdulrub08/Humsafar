import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './Head/header/header.component';
import { FooterComponent } from './bootom/footer/footer.component';
import { LandingComponent } from './landing/landing/landing.component';
import { GeneralRoutingModule } from './general-routing.module';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
      declarations: [],
      imports: [
        HeaderComponent,
        FooterComponent,
        LandingComponent,
        SignupComponent,
        HttpClientModule,
        GeneralRoutingModule
      ],
      exports: [FooterComponent, HeaderComponent, LandingComponent,SignupComponent,
        GeneralRoutingModule],
        providers: [
          AuthService,
          provideAnimationsAsync()
        ],
})
export class GeneralModule { }
