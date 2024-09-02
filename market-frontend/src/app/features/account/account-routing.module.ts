import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    component: AccountLayoutComponent,
    children: [
      { path: '', redirectTo: 'my-account', pathMatch: 'full' },
      { path: 'my-account', component: MyAccountPageComponent },
      { path: 'edit', component: AccountInfoPageComponent },
      { path: 'gdpr', component: GdprPageComponent },
      { path: 'new-address-book', component: NewAddressBookPageComponent },
      { path: 'address-book', component: AddressBookPageComponent },
      { path: 'my-orders', component: MyOrdersPageComponent },
      { path: 'my-downloadable-products', component: MyDownloadableProductsPageComponent },
      { path: 'stored-payment-methods', component: StoredPaymentMethodsPageComponent },
      { path: 'newsletter', component: NewsletterPageComponent },
      { path: 'reviews', component: ReviewsPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
