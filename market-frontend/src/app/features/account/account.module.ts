import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { AccountInfoPageComponent } from './pages/account-info-page/account-info-page.component';
import { GdprPageComponent } from './pages/gdpr-page/gdpr-page.component';
import { NewAddressBookPageComponent } from './pages/new-address-book-page/new-address-book-page.component';
import { AddressBookPageComponent } from './pages/address-book-page/address-book-page.component';


@NgModule({
  declarations: [
    AccountLayoutComponent,
    MyAccountPageComponent,
    AccountInfoPageComponent,
    GdprPageComponent,
    NewAddressBookPageComponent,
    AddressBookPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
