import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping-page.component.html',
  styleUrls: ['./shipping-page.component.scss']
})
export class ShippingComponent {
  currentStep: 'shipping' | 'payment' = 'shipping';

  // When moving to payment step
  goToPayment() {
    this.currentStep = 'payment';
  }

}
