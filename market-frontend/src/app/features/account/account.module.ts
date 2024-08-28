import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';


@NgModule({
  declarations: [
    AccountLayoutComponent,
    MyAccountPageComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
