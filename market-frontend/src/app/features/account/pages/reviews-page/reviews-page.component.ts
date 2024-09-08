import { Component } from '@angular/core';

interface Product {
  createdDate: string;
  name: string;
  rating: number;
  review: string;
}

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.scss']
})
export class ReviewsPageComponent {
  products: Product[] = [
    {
      createdDate: '1/8/24',
      name: 'Aceite aguacate Mueloliva 1lt',
      rating: 5,
      review: 'Excelente precio!!! El servicio es buenisimo! El servicio es buenisimo! x2'
    },
    {
      createdDate: '1/8/24',
      name: 'Aceite aguacate',
      rating: 3,
      review: 'Excelente precio!!!'
    },
    {
      createdDate: '1/8/24',
      name: 'Aceite aguacate Mueloliva 1lt',
      rating: 5,
      review: 'Excelente precio!!! El servicio es buenisimo!'
    },
  ];
}
