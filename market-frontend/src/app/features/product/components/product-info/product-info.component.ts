import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-info',
  template: `
    <h2>{{product.name}}</h2>

    <div class="mb-3">
      <i *ngFor="let star of [1,2,3,4,5]" class="fa fa-star"
         [class.text-warning]="star <= product.rating"></i>
      <span class="ml-2 text-muted">{{product.numReviews}} reviews</span>
    </div>

    <p>{{product.description}}</p>
    <hr>

    <p class="h3">{{product.price | currency}}</p>

    <p>Availability: <span class="text-success">{{product.availability}}</span></p>
    <p>SKU: {{product.sku}}</p>

    <div class="form-group">
      <label for="quantity">Quantity:</label>
      <div class="input-group" style="max-width: 150px;">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button" (click)="decreaseQuantity.emit()">-</button>
        </div>
        <input type="text" id="quantity" class="form-control text-center" [value]="quantity">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" (click)="increaseQuantity.emit()">+</button>
        </div>
      </div>
    </div>

    <button class="btn btn-danger mt-3" (click)="addToCart.emit()">Add to Cart</button>
    <button class="btn btn-danger mt-3 ml-2">
      <i class="fa fa-heart"></i>
    </button>
  `,
  styles: []
})
export class ProductInfoComponent {
  @Input() product: any;
  @Input() quantity: number = 0;
  @Output() decreaseQuantity = new EventEmitter();
  @Output() increaseQuantity = new EventEmitter();
  @Output() addToCart = new EventEmitter();
}