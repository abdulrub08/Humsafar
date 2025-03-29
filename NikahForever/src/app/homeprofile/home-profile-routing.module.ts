import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProfileComponent } from './home-profile.component';

const genRoutes: Routes = [{ path: 'profile', component: HomeProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(genRoutes)],
  exports: [RouterModule]
})
export class HomeProfileRoutingModule { }
