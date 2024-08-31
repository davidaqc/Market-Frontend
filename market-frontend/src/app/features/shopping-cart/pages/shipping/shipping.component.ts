import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {
  currentStep: 'shipping' | 'payment' = 'shipping';

  // When moving to payment step
  goToPayment() {
    this.currentStep = 'payment';
  }

}
