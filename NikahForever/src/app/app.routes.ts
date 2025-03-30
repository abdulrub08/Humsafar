import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileImgComponent } from './homeprofile/left/profile-img/profile-img.component';
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