import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const genRoutes: Routes = [{ path: 'dashboard', component: AdminDashboardComponent }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(genRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
