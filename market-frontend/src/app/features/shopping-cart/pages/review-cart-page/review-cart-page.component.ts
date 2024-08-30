import { Component } from '@angular/core';
import { CartItem } from '../../../../core/models/cart-item.model';

@Component({
  selector: 'app-review-cart-page',
  templateUrl: './review-cart-page.component.html',
  styleUrls: ['./review-cart-page.component.scss']
})
export class ReviewCartPageComponent {
  products: CartItem[] = [
    { id: 1, name: 'Candelas con cuerda 7.5c...', price: 65000, quantity: 1, imageUrl: 'assets/images/candelas.jpg' },
    { id: 2, name: 'Canasta lavanderia con ta...', price: 110000, quantity: 1, imageUrl: 'assets/images/canasta.jpg' },
    { id: 3, name: 'Candelas con cuerda 7.5c...', price: 65000, quantity: 1, imageUrl: 'assets/images/candelas.jpg' },
    { id: 4, name: 'Canasta lavanderia con ta...', price: 110000, quantity: 1, imageUrl: 'assets/images/canasta.jpg' },
  ];

  shippingCost: number = 0;

  getSubtotal(): number {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.shippingCost;
  }

  updateCart(): void {
    console.log('Cart updated');
  }

  removeProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
    this.updateCart();
  }
}
