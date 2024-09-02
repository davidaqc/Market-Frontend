import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account-page',
  templateUrl: './my-account-page.component.html',
  styleUrls: ['./my-account-page.component.scss']
})
export class MyAccountPageComponent {
  contactInfo = {
    name: 'David Quesada',
    email: 'davidqc05@gmail.com'
  };

  newsletterMessage = 'No estás suscrito a nuestro boletín de noticias.';

  paymentAddressMessage = 'No has establecido una dirección de facturación predeterminada.';

  shippingAddress = {
    name: 'David Quesada',
    canton: 'Quebradilla',
    address: 'Un costado oeste de la iglesia de Bermejo',
    province: 'Cartago',
    country: 'Costa Rica',
    phone: '71197531'
  };

  recentReviews = [
    { productName: 'Aceite aguacate Mueloliva 1lt', rating: 5 }
  ];
}
