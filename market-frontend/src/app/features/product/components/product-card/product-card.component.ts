import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="card h-100">
      <img [src]="product.imageUrl" class="card-img-top" [alt]="product.name">
      <div class="card-body">
        <h5 class="card-title text-truncate">{{ product.name }}</h5>
        <p class="card-text">
          <ng-container *ngFor="let star of [1,2,3,4,5]">
            <i class="far fa-star"></i>
          </ng-container>
        </p>
        <p class="card-text">₡{{ product.price.toFixed(2) }}</p>
        <a routerLink="/product/product-detail" class="btn btn-danger w-100" (click)="addToCartClicked()">Agregar al Carrito</a>
      </div>
    </div>
  `
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() addToCart = new EventEmitter<any>();

  addToCartClicked() {
    this.addToCart.emit(this.product);
  }
}