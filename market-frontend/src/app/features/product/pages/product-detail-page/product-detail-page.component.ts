import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail-page',
  template: `
    <div class="container-fluid container-md mt-5">
      <div class="row">
        <div class="col-md-6 mb-4">
          <app-product-images [product]="product" (changeMainImage)="changeMainImage($event)"></app-product-images>
        </div>
        <div class="col-md-6">
          <app-product-info [product]="product" [quantity]="quantity"
                            (decreaseQuantity)="decreaseQuantity()"
                            (increaseQuantity)="increaseQuantity()"
                            (addToCart)="addToCart()"></app-product-info>
        </div>
      </div>

      <div class="mt-5">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" [class.active]="activeTab === 'details'" (click)="activeTab = 'details'">Detalles de producto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [class.active]="activeTab === 'ratings'" (click)="activeTab = 'ratings'">Calificaciones</a>
          </li>
        </ul>

        <div class="tab-content mt-3 px-5">
          <div *ngIf="activeTab === 'details'">
            <app-product-details-tab [product]="product"></app-product-details-tab>
          </div>
          <div *ngIf="activeTab === 'ratings'">
            <app-product-ratings-tab [product]="product"></app-product-ratings-tab>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .nav-tabs .nav-link.active {
      color: var(--danger-color);
      border-bottom: 2px solid var(--danger-color);
    }
    .nav-tabs .nav-link {
      color: #495057;
    }
    .fa-star {
      color: #ffc107;
    }
  `]
})
export class ProductDetailPageComponent implements OnInit {
  quantity = 1;
  activeTab = 'details';

  product = {
    name: 'Canasta lavandería con tapa Mimbre 38x27x47cm',
    description: 'Canasta de mimbre color café con manta y tapa, ideal para guardar artículos o ropa sucia',
    price: 9800.0,
    availability: 'Disponible',
    sku: '07221053',
    mainImage: 'assets/images/canasta.jpg',
    images: [
      'assets/images/candelas.jpg',
      'assets/images/hamaca_asiento_cojin.jpg',
      'assets/images/hamaca_tela_rayas.jpg',
    ],
    rating: 4,
    numReviews: 12,
    details: [
      { label: 'Peso total por medida en Kilogramos', value: '0.89' },
      { label: 'Medidas del empaque - Largo cm', value: '34' },
      { label: 'Medidas del empaque - Ancho cm', value: '24' },
      { label: 'Medidas del empaque - Alto cm', value: '49' },
      { label: 'Medidas del producto armado en cm', value: '34x29x48' },
      { label: 'Garantía', value: '45 días' },
      { label: 'Marca', value: 'Genérico' },
      { label: 'País de origen', value: 'China' },
      { label: 'Material', value: 'Mimbre' },
      { label: 'Especificaciones', value: 'Evitar contacto directo con el agua, para que no se pudra' },
    ]
  };

  constructor() {}

  ngOnInit(): void {}

  changeMainImage(newImage: string): void {
    this.product.mainImage = newImage;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  addToCart(): void {
    console.log(`Added ${this.quantity} item(s) to cart`);
  }
}