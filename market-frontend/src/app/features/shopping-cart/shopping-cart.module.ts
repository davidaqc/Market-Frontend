import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ReviewCartPageComponent } from './pages/review-cart-page/review-cart-page.component';
import { ShippingComponent } from './pages/shipping-page/shipping-page.component';
import { CheckoutStepperComponent } from './components/checkout-stepper/checkout-stepper.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';


@NgModule({
  declarations: [
    ReviewCartPageComponent,
    ShippingComponent,
    CheckoutStepperComponent,
    PaymentPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
