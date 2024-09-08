import { Component, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../../../core/models/cart-item.model';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss']
})
export class ShoppingCartSummaryComponent {

  showModal = false;
  @Output() close = new EventEmitter<void>();

  cartItems: CartItem[] = [
    { id: 1, name: 'Taza doble pared vidrio 8oz 2unds mas texto aqui', price: 4700, quantity: 3, imageUrl: 'assets/images/candelas.jpg', quantityChanged: false },
    { id: 2, name: 'Taza caballito de mar cerámica 16oz', price: 9800, quantity: 1, imageUrl: 'assets/images/canasta.jpg', quantityChanged: false },
    { id: 3, name: 'Taza pez cerámica 16oz', price: 195000, quantity: 1, imageUrl: 'assets/images/biombo.jpg', quantityChanged: false },
    { id: 4, name: 'Taza pez cerámica 16oz', price: 195000, quantity: 1, imageUrl: 'assets/images/biombo.jpg', quantityChanged: false },
    { id: 5, name: 'Taza pez cerámica 16oz', price: 195000, quantity: 1, imageUrl: 'assets/images/biombo.jpg', quantityChanged: false }
  ];

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get totalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  removeItem(index: number): void {
    this.showModal = true;
    //this.cartItems.splice(index, 1);
  }

  onConfirm() {
    this.showModal = false;
  }
  
  onCancel() {
    this.showModal = false;
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
