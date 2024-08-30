import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ReviewCartPageComponent } from './pages/review-cart-page/review-cart-page.component';


@NgModule({
  declarations: [
    ReviewCartPageComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
