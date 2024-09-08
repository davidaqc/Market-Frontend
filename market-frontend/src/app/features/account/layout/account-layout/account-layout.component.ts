import { Component } from '@angular/core';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent {
  menuItems = [
    { path: './my-account', label: 'Mi Cuenta' },
    { path: './my-orders', label: 'Mis pedidos' },
    { path: './my-downloadable-products', label: 'Mis productos descargables' },
    { path: './wishlist', label: 'Mi lista de deseos' },
    { path: './address-book', label: 'Libreta de direcciones' },
    { path: './edit', label: 'Información de la cuenta' },
    { path: './stored-payment-methods', label: 'Métodos de pago almacenados' },
    { path: './gdpr', label: 'GDPR' },
    { path: './reviews', label: 'Reseñas de mi artículo' },
    { path: './newsletter', label: 'Suscripciones al boletín informativo' },
  ];
}
