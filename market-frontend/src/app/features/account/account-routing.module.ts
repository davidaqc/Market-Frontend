import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { AccountInfoPageComponent } from './pages/account-info-page/account-info-page.component';
import { GdprPageComponent } from './pages/gdpr-page/gdpr-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccountLayoutComponent,
    children: [
      { path: '', redirectTo: 'mi-cuenta', pathMatch: 'full' },
      { path: 'mi-cuenta', component: MyAccountPageComponent },
      { path: 'edit', component: AccountInfoPageComponent },
      { path: 'gdpr', component: GdprPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
