import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  template: `
    <div class="form-group">
      <label for="quantity">{{ label }}:</label>
      <div class="input-group" style="max-width: 150px;">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button" (click)="decrease()">-</button>
        </div>
        <input type="text" id="quantity" class="form-control text-center" [value]="quantity" readonly>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" (click)="increase()">+</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class QuantitySelectorComponent {
  @Input() quantity: number = 1;
  @Input() label: string = 'Quantity';
  @Output() quantityChange = new EventEmitter<number>();

  decrease(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  increase(): void {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }
}