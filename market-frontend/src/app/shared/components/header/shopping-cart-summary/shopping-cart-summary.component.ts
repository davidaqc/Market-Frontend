import { Component, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../../../core/models/cart-item.model';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss']
})
export class ShoppingCartSummaryComponent {

  @Output() close = new EventEmitter<void>();

  cartItems: CartItem[] = [
    { name: 'Candelas con cuerda 7.5c...', price: 4700, quantity: 3, image: 'assets/images/candelas.jpg', quantityChanged: false },
    { name: 'Canasta lavanderia con ta...', price: 9800, quantity: 1, image: 'assets/images/canasta.jpg', quantityChanged: false },
    { name: 'Biombo 3 paneles Paris M...', price: 195000, quantity: 1, image: 'assets/images/biombo.jpg', quantityChanged: false }
  ];

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get totalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  editItem(index: number): void {
    console.log(`Editing item at index ${index}`);
  }

  onQuantityChange(index: number): void {
    this.cartItems[index].quantityChanged = true;
  }

  updateItem(index: number): void {
    if (this.cartItems[index].quantity > 0) {
      this.cartItems[index].quantityChanged = false;
    } else {
      this.removeItem(index);
    }
  }

  closeCart() {
    this.close.emit();
  }

}
