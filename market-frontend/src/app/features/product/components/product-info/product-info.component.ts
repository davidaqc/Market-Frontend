import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-info',
  template: `
    <h2>{{product.name}}</h2>

    <div class="mb-3">
      <i *ngFor="let star of [1,2,3,4,5]" class="fa fa-star"
         [class.text-warning]="star <= product.rating"></i>
      <span class="ms-4 text-muted">{{product.numReviews}} Calificaciones</span>
    </div>

    <p>{{product.description}}</p>
    <hr>

    <p class="h3">{{product.price | currency}}</p>

    <p>Disponibilidad: <span class="text-success">{{product.availability}}</span></p>
    <p>SKU#: {{product.sku}}</p>
  `,
  styles: []
})
export class ProductInfoComponent {
  @Input() product: any;
}