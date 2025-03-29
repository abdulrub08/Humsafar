import { Component, NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './general/landing/landing/landing.component';
import { LoginComponent } from './features/auth/login/login.component';
 const routes: Routes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', 
      loadComponent:() => import('./general/general.module').then(m=> m.GeneralModule)
      // component: LandingComponent 
    },
    { path: '**', redirectTo: 'login' } // Wildcard route for unknown paths
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
// export const routes: Routes = [
//     { path: '', loadChildren: () => import('./general/general.module').then(m => m.GeneralModule) },
//     { path: '**', redirectTo: '' }
// ];
// export const AppRoutingModule = provideRouter(routes);