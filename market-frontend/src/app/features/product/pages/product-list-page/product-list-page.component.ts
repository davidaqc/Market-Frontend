import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent {

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

  // Sort Options Component variables
  sortOptions: string[] = ['Posición', 'Nombre De Producto', 'Precio'];
  defaultSort: string = 'Nombre De Producto';
  selectedSort: string = this.defaultSort;

  // Items Per Page Component variables
  itemsPerPageOptions: number[] = [12, 24, 36];
  itemsPerPage: number = 12;

  // Pagination Component variables
  currentPage: number = 1;
  totalPages: number = 3;

  // Price Filter Component variables
  priceRanges = [
    { range: '₡0,00 - ₡9.999,99', count: 59 },
    { range: '₡10.000,00 - ₡19.999,99', count: 12 },
    { range: '₡20.000,00 - ₡29.999,99', count: 4 },
    { range: '₡30.000,00 y superior', count: 1 }
  ];

  // Breadcrumb Component variables
  breadcrumbItems = [
    {label: 'Hogar', url: '/product/product-detail'},
    {label: 'Adornos y decoración', url: '/product/product-detail'}
  ];

  onSortChange(sort: string) {
    this.selectedSort = sort;
    console.log('Selected sort option:', sort);
  }

  onItemsPerPageChange(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
    console.log('Selected items per page:', itemsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('Selected page number:', page);
  }

  onPriceFilterChange(selectedRanges: string[]) {
    console.log('Selected price ranges:', selectedRanges);
  }

  onAddToCart(product: Product) {
    console.log('Added to cart:', product);
  }
}