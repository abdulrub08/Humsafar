import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AppComponent } from './app.component';
import { ProfileCardSectionComponent } from './profile/profile-card-section/profile-card-section.component';
import { FaqSectionComponent } from './Faq/faq-section/faq-section.component';
import { LandingPageComponent } from './landingPage/landing-page/landing-page.component';
import { CompleteFormComponent } from './profile/complete-form/complete-form.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    // {
    //   path: '', // <your-domain>/
    //   component: LandingPageComponent,
    //   // redirectTo: '/users/u1',
    //   pathMatch: 'full'
    // },

      { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
      { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
      { path: '**', redirectTo: '' },
    { path: '', component: LandingPageComponent },
    { path: 'dashboard', component: LandingPageComponent, canActivate: [AuthGuard] },
    {
      path: 'users', // <your-domain>/users/<uid>
      component: UserProfileComponent,
    },
    {
      path: 'profile/form', // <your-domain>/profile/form<uid>
      component: CompleteFormComponent,
    },
    {
      path: 'profile', // <your-domain>/profile/<uid>
      component: ProfileCardSectionComponent,
    },
    {
      path: 'faq', // <your-domain>/faq<uid>
      component: FaqSectionComponent,
    },
    {
      path: '**',
      component: AppComponent,
    },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
