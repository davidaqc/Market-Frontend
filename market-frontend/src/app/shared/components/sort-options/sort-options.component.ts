import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-options',
  template: `
    <div>
      <span class="fw-bold">Ordenar por</span>
      <select [(ngModel)]="selectedSort" (ngModelChange)="onSortChange()" class="form-select d-inline-block w-auto ms-2">
        <option *ngFor="let option of sortOptions" [value]="option">{{ option }}</option>
      </select>
    </div>
  `
})
export class SortOptionsComponent implements OnInit {
  @Input() sortOptions: string[] = [];
  @Input() defaultSort: string = '';
  @Output() sortChange = new EventEmitter<string>();

  selectedSort: string = '';

  ngOnInit() {
    if (this.defaultSort && this.sortOptions.includes(this.defaultSort)) {
      this.selectedSort = this.defaultSort;
    } else if (this.sortOptions.length > 0) {
      this.selectedSort = this.sortOptions[0];
    }
    this.onSortChange();
  }

  onSortChange() {
    this.sortChange.emit(this.selectedSort);
  }
}