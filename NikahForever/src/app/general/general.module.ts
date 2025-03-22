import { NgModule } from '@angular/core';
import { HeaderComponent } from './Head/header/header.component';
import { FooterComponent } from './bootom/footer/footer.component';
import { LandingComponent } from './landing/landing/landing.component';
import { GeneralRoutingModule } from './general-routing.module';
@NgModule({
      declarations: [],
      imports: [
        HeaderComponent,
        FooterComponent,
        LandingComponent,
        GeneralRoutingModule
      ],
      exports: [FooterComponent, HeaderComponent, LandingComponent,
        GeneralRoutingModule]
})
export class GeneralModule { }
