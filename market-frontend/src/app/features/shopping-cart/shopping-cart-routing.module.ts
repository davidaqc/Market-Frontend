import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewCartPageComponent } from './pages/review-cart-page/review-cart-page.component';

const routes: Routes = [
  { path: 'review', component: ReviewCartPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
