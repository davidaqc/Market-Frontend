import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
  { path: 'info', loadChildren: () => import('./features/info/info.module').then(m => m.InfoModule) },
  { path: 'account', loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule) },
  { path: 'checkout', loadChildren: () => import('./features/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  { path: 'product', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "ignore",
    anchorScrolling: "enabled",
    scrollPositionRestoration: 'enabled', // This will scroll to top on route change
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
