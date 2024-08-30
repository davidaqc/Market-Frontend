import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReviewCartPageComponent } from './pages/review-cart-page/review-cart-page.component';
import { ShippingComponent } from './pages/shipping/shipping.component';

const routes: Routes = [
  { path: 'review', component: ReviewCartPageComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
