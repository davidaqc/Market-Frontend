import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ReviewCartPageComponent } from './pages/review-cart-page/review-cart-page.component';


@NgModule({
  declarations: [
    ReviewCartPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
