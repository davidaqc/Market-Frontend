import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  template: `
    <div class="card">
      <div class="card-header" (click)="toggleFilter()">
        <h5 class="mb-0">
          Precio 
          <i class="fas" [ngClass]="{'fa-chevron-down': !isExpanded, 'fa-chevron-up': isExpanded}"></i>
        </h5>
      </div>
      <div class="card-body" [ngClass]="{'d-none': !isExpanded}">
        <ul class="list-unstyled">
          <li *ngFor="let range of priceRanges">
            <a href="#" class="text-decoration-none" (click)="selectRange(range.range, $event)">
              {{ range.range }} ({{ range.count }})
            </a>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class PriceFilterComponent {
  @Input() priceRanges: { range: string; count: number }[] = [];
  @Output() filterChange = new EventEmitter<string[]>();

  isExpanded = true;
  selectedRanges: string[] = [];

  toggleFilter() {
    this.isExpanded = !this.isExpanded;
  }

  selectRange(range: string, event: Event) {
    event.preventDefault();
    const index = this.selectedRanges.indexOf(range);
    if (index > -1) {
      this.selectedRanges.splice(index, 1);
    } else {
      this.selectedRanges.push(range);
    }
    this.filterChange.emit(this.selectedRanges);
  }
}