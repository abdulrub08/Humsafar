import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './general/landing/landing/landing.component';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./general/general.module').then(m => m.GeneralModule) },
  { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', component: LandingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Fixed wildcard route
];
export const AppRoutingModule = provideRouter(routes);
