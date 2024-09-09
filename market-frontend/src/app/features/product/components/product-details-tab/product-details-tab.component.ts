import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details-tab',
  template: `
    <ul class="list-unstyled">
      <li *ngFor="let detail of product.details">
        • {{ detail.label }}: {{ detail.value }}
      </li>
    </ul>
  `,
  styles: []
})
export class ProductDetailsTabComponent {
  @Input() product: any;
}