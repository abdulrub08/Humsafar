import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from '../../general/general-routing.module';
import { CommonGenericModule } from '../../shared/common-generic/common-generic.module';
import { AuthService } from '../../services/auth.service';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonGenericModule,
    MatDialogModule,
    LoginComponent,
    AuthRoutingModule
  ],
  exports: [
    CommonGenericModule,
    MatDialogModule,
    LoginComponent,
    AuthRoutingModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
