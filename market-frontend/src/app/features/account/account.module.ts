import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    AccountLayoutComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
