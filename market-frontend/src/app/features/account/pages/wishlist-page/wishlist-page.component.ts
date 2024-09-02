import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent {

  products: Product[] = [
    { id: 1, name: 'Aceite aguacate spray 1...', price: 2900.00, imageUrl: 'assets/images/canasta.jpg' },
    { id: 2, name: 'Banco blanco Plástico 4...', price: 4600.00, imageUrl: 'assets/images/candelas.jpg' },
    { id: 3, name: 'Aceite coco extravirgen...', price: 3300.00, imageUrl: 'assets/images/canasta.jpg' },
    { id: 4, name: 'Abanico de mesa perso...', price: 6500.00, imageUrl: 'assets/images/hamaca_asiento_cojin.jpg' },
  ];

  addToCart(product: Product) {
    console.log('Added to cart:', product);
  }

  updateFavorites() {
    console.log('Updating favorites');
  }

  shareFavorites() {
    console.log('Sharing favorites');
  }

  addAllToCart() {
    console.log('Adding all to cart');
  }
}
