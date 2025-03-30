import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { GeneralModule } from './general/general.module';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminModule } from './admin/admin.module';
import { HomeProfileModule } from './homeprofile/home-profile.module';
import { CommonGenericModule } from './shared/common-generic/common-generic.module';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthModule } from './features/auth/auth.module';
import { FooterComponent } from "./general/bootom/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { TestLandingComponent } from './test/test-landing/test-landing.component';
import { TestContentModule } from './test/test-content/test-content.module';
@NgModule({
  declarations: [
   AppComponent, TestLandingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    GeneralModule,
    HomeProfileModule,
    AdminModule,
    TestContentModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    FooterComponent
],
  bootstrap: [AppComponent], // Bootstrapping standalone component
   providers: [
            AuthService,
            provideAnimationsAsync()
   ],
})
export class AppModule { }
