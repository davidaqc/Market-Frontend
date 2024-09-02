import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { AccountInfoPageComponent } from './pages/account-info-page/account-info-page.component';
import { GdprPageComponent } from './pages/gdpr-page/gdpr-page.component';
import { NewAddressBookPageComponent } from './pages/new-address-book-page/new-address-book-page.component';
import { AddressBookPageComponent } from './pages/address-book-page/address-book-page.component';
import { MyOrdersPageComponent } from './pages/my-orders-page/my-orders-page.component';
import { MyDownloadableProductsPageComponent } from './pages/my-downloadable-products-page/my-downloadable-products-page.component';
import { StoredPaymentMethodsPageComponent } from './pages/stored-payment-methods-page/stored-payment-methods-page.component';
import { NewsletterPageComponent } from './pages/newsletter-page/newsletter-page.component';
import { ReviewsPageComponent } from './pages/reviews-page/reviews-page.component';


@NgModule({
  declarations: [
    AccountLayoutComponent,
    MyAccountPageComponent,
    AccountInfoPageComponent,
    GdprPageComponent,
    NewAddressBookPageComponent,
    AddressBookPageComponent,
    MyOrdersPageComponent,
    MyDownloadableProductsPageComponent,
    StoredPaymentMethodsPageComponent,
    NewsletterPageComponent,
    ReviewsPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
