import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
}

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent {

  isPriceFilterExpanded = true;

  priceRanges = [
    { range: '₡0,00 - ₡9.999,99', count: 59 },
    { range: '₡10.000,00 - ₡19.999,99', count: 12 },
    { range: '₡20.000,00 - ₡29.999,99', count: 4 },
    { range: '₡30.000,00 y superior', count: 1 }
  ];

  products: Product[] = [
    { id: 1, name: 'Aceite aguacate s...', price: 2900.00, imageUrl: 'assets/images/canasta.jpg', rating: 0 },
    { id: 2, name: 'Aceite coco extra...', price: 3300.00, imageUrl: 'assets/images/candelas.jpg', rating: 0 },
    { id: 3, name: 'Aceite girasol La S...', price: 1250.00, imageUrl: 'assets/images/canasta.jpg', rating: 0 },
    { id: 4, name: 'Aceite girasol Zad...', price: 2500.00, imageUrl: 'assets/images/hamaca_asiento_cojin.jpg', rating: 0 },
    { id: 1, name: 'Aceite aguacate s...', price: 2900.00, imageUrl: 'assets/images/canasta.jpg', rating: 0 },
    { id: 2, name: 'Aceite coco extra...', price: 3300.00, imageUrl: 'assets/images/candelas.jpg', rating: 0 },
    { id: 3, name: 'Aceite girasol La S...', price: 1250.00, imageUrl: 'assets/images/canasta.jpg', rating: 0 },
    { id: 4, name: 'Aceite girasol Zad...', price: 2500.00, imageUrl: 'assets/images/hamaca_asiento_cojin.jpg', rating: 0 },
  ];

  sortOptions = ['Nombre De Producto'];
  selectedSort = 'Nombre De Producto';
  itemsPerPage = 12;
  currentPage = 1;

  addToCart(product: Product) {
    console.log('Added to cart:', product);
  }

  togglePriceFilter() {
    this.isPriceFilterExpanded = !this.isPriceFilterExpanded;
  }
}
