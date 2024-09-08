import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <nav aria-label="Page navigation" class="mt-2 mt-md-0">
      <ul class="pagination mb-0">
        <li class="page-item" [class.disabled]="currentPage === 1">
          <a class="page-link" href="#" (click)="changePage(currentPage - 1, $event)">&laquo;</a>
        </li>
        <li class="page-item" *ngFor="let page of pages" [class.active]="page === currentPage">
          <a class="page-link" href="#" (click)="changePage(page, $event)">{{ page }}</a>
        </li>
        <li class="page-item" [class.disabled]="currentPage === totalPages">
          <a class="page-link" href="#" (click)="changePage(currentPage + 1, $event)">&raquo;</a>
        </li>
      </ul>
    </nav>
  `
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }

  changePage(page: number, event: Event) {
    event.preventDefault();
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}