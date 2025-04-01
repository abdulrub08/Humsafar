import { NgModule } from '@angular/core';
import { GeneralRoutingModule } from './general-routing.module';
import { HeaderComponent } from './Head/header/header.component';
import { FooterComponent } from './bootom/footer/footer.component';
import { CommonGenericModule } from '../shared/common-generic/common-generic.module';
import { SlideBannerComponent } from './banner/slide-banner/slide-banner.component';
import { ProfileCardComponent } from './landing/profile-card/profile-card.component';
import { UsersComponent } from './landing/users/users.component';
import { LandingComponent } from './landing/landing/landing.component';
@NgModule({
      declarations: [],
      imports: [
        HeaderComponent,
        FooterComponent,
        CommonGenericModule,
        SlideBannerComponent,
        ProfileCardComponent,
        UsersComponent,
        LandingComponent,
        GeneralRoutingModule
      ],
      exports: [FooterComponent, HeaderComponent, SlideBannerComponent, ProfileCardComponent, UsersComponent, LandingComponent]
})
export class GeneralModule { }
