import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent {

  currentStep: 'shipping' | 'payment' = 'payment';

  orderSummary = {
    subtotal: 192000,
    shipping: 0,
    total: 192000,
    itemCount: 3
  };

  shippingInfo = {
    name: 'David Quesada',
    address1: 'a, a, a',
    cityState: 'CARTAGO, Cartago',
    country: 'Costa Rica',
    phone: '71197531',
    coordinates: {
      lat: 10.0159394,
      lng: -84.2141700999999
    }
  };
}