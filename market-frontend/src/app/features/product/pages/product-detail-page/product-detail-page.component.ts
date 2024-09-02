import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  quantity = 1;
  activeTab = 'details';

  productDetails = [
    { label: 'Peso total por medida en Kilogramos', value: '0.89' },
    { label: 'Medidas del empaque - Largo cm', value: '34' },
    { label: 'Medidas del empaque - Ancho cm', value: '24' },
    { label: 'Medidas del empaque - Alto cm', value: '49' },
    { label: 'Medidas del producto armado en cm', value: '34x29x48' },
    { label: 'Garantía', value: '45 días' },
    { label: 'Marca', value: 'Genérico' },
    { label: 'País de origen', value: 'China' },
    { label: 'Material', value: 'Mimbre' },
    {
      label: 'Especificaciones',
      value: 'Evitar contacto directo con el agua, para que no se pudra',
    },
  ];

  product = {
    name: 'Canasta lavandería con tapa Mimbre 38x27x47cm',
    description:
      'Canasta de mimbre color café con manta y tapa, ideal para guardar artículos o ropa sucia',
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
  };

  rating = 0;
  hoveredRating = 0;
  stars = Array(5).fill(0);

  constructor() {}

  ngOnInit(): void {}

  setRating(index: number): void {
    this.rating = index;
  }

  currentHover(index: number): void {
    this.hoveredRating = index;
  }

  resetHover(): void {
    this.hoveredRating = 0;
  }

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
