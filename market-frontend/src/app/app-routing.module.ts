import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
  { path: 'info', loadChildren: () => import('./features/info/info.module').then(m => m.InfoModule) },
  { path: 'account', loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
