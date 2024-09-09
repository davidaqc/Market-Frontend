import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-images',
  template: `
    <div class="border p-2 mb-3">
      <img [src]="product.mainImage" [alt]="product.name" class="img-fluid">
    </div>

    <div class="d-flex justify-content-start flex-wrap">
      <div *ngFor="let img of product.images" class="border p-1 m-1" style="width: 70px; height: 70px;">
        <img [src]="img" alt="Thumbnail" class="img-fluid"
             style="cursor: pointer; object-fit: cover; width: 100%; height: 100%;"
             (click)="changeMainImage.emit(img)">
      </div>
    </div>
  `,
  styles: []
})
export class ProductImagesComponent {
  @Input() product: any;
  @Output() changeMainImage = new EventEmitter<string>();
}