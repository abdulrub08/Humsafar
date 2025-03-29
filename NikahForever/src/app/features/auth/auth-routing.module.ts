import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

const genRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(genRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
// The GeneralRoutingModule class is a module that imports the RouterModule and Routes classes from the @angular/router package, and exports the RouterModule class.
// export const GeneralRoutingModule = provideRouter(genRoutes);
