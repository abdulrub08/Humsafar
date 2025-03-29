import { NgModule } from '@angular/core';
import { FooterComponent } from './bootom/footer/footer.component';
import { GeneralRoutingModule } from './general-routing.module';
import { HeaderLoginComponent } from './Head/header/header-login/header-login.component';
import { HeaderLogoutComponent } from './Head/header/header-logout/header-logout.component';
@NgModule({
  declarations: [],
  imports: [
    HeaderLoginComponent,
    HeaderLogoutComponent,
    FooterComponent,
    GeneralRoutingModule
  ],
  exports: [FooterComponent, HeaderLoginComponent,HeaderLogoutComponent],
})
export class GeneralModule { }
