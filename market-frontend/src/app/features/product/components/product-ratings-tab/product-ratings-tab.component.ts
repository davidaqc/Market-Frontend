import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-ratings-tab',
  template: `
    <h5 class="text-danger">ESTÁS REVISANDO:</h5>
    <h6>{{product.name}}</h6>

    <div class="form-group mt-3">
      <label>Su calificación *</label>
      <div class="mt-3 rating">
        <span *ngFor="let star of stars; let i = index" (click)="setRating(i + 1)"
              (mouseover)="currentHover(i + 1)" (mouseleave)="resetHover()" class="star"
              [class.filled]="i < (hoveredRating || rating)">
          ★
        </span>
      </div>
    </div>

    <div class="form-group mt-3">
      <label for="apodo">Apodo *</label>
      <input type="text" id="apodo" class="form-control" placeholder="David">
    </div>

    <div class="form-group mt-3">
      <label for="resumen">Resumen *</label>
      <input type="text" id="resumen" class="form-control">
    </div>

    <div class="form-group mt-3">
      <label for="calificacion">Calificación *</label>
      <textarea id="calificacion" class="form-control" rows="4"></textarea>
    </div>

    <button class="btn btn-danger mt-3">Calificar</button>
  `,
  styles: [`
    .rating {
      font-size: 2rem;
      color: #ccc;
      cursor: pointer;
    }
    .star.filled {
      color: #ffd700;
    }
  `]
})
export class ProductRatingsTabComponent {
  @Input() product: any;

  rating = 0;
  hoveredRating = 0;
  stars = Array(5).fill(0);

  setRating(index: number): void {
    this.rating = index;
  }

  currentHover(index: number): void {
    this.hoveredRating = index;
  }

  resetHover(): void {
    this.hoveredRating = 0;
  }
}