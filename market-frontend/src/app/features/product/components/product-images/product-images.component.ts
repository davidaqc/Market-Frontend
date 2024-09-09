import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-images',
  template: `
    <div class="image-container">
      <div class="main-image border p-2 mb-3">
        <img [src]="currentMainImage" [alt]="product.name" class="img-fluid">
        <div class="navigation-arrows">
          <button class="nav-arrow left" (click)="prevImage()">&lt;</button>
          <button class="nav-arrow right" (click)="nextImage()">&gt;</button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-start flex-wrap">
      <div *ngFor="let img of product.images; let i = index"
           class="border p-1 m-1"
           [class.selected]="img === currentMainImage"
           style="width: 70px; height: 70px;">
        <img [src]="img"
             [alt]="'Thumbnail ' + (i + 1)"
             class="img-fluid"
             style="cursor: pointer; object-fit: cover; width: 100%; height: 100%;"
             (click)="changeMainImage(img)">
      </div>
    </div>
  `,
  styles: [`
    .selected {
      border-color: var(--danger-color) !important;
      border-width: 1px !important;
    }
    .image-container {
      position: relative;
    }
    .main-image {
      position: relative;
    }
    .navigation-arrows {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .image-container:hover .navigation-arrows {
      opacity: 1;
    }
    .nav-arrow {
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-size: 20px;
    }
    .nav-arrow.left {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .nav-arrow.right {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  `]
})
export class ProductImagesComponent implements OnInit {
  @Input() product: any;
  currentMainImage: string = '';
  currentIndex: number = 0;

  ngOnInit() {
    this.currentMainImage = this.product.images[0];
    this.currentIndex = 0;
  }

  changeMainImage(newImage: string): void {
    this.currentMainImage = newImage;
    this.currentIndex = this.product.images.indexOf(newImage);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.product.images.length;
    this.currentMainImage = this.product.images[this.currentIndex];
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.product.images.length) % this.product.images.length;
    this.currentMainImage = this.product.images[this.currentIndex];
  }
}