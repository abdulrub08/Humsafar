import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';

const genRoutes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(genRoutes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
