import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { NewPasswordPageComponent } from './pages/new-password-page/new-password-page.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';


@NgModule({
  declarations: [
    RegistrationPageComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent,
    NewPasswordPageComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
