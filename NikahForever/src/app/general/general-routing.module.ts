import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';
import { NgModule } from '@angular/core';

const genRoutes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(genRoutes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule {}
// The GeneralRoutingModule class is a module that imports the RouterModule and Routes classes from the @angular/router package, and exports the RouterModule class.
// export const GeneralRoutingModule = provideRouter(genRoutes);
