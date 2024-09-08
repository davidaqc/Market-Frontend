import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-per-page',
  template: `
    <div>
      <span>Mostrar</span>
      <select [(ngModel)]="selectedItemsPerPage" (ngModelChange)="onItemsPerPageChange()" class="form-select d-inline-block w-auto ms-2">
        <option *ngFor="let option of itemsPerPageOptions">{{ option }}</option>
      </select>
    </div>
  `
})
export class ItemsPerPageComponent implements OnInit {
  @Input() itemsPerPageOptions: number[] = [];
  @Input() defaultItemsPerPage: number = 12;
  @Output() itemsPerPageChange = new EventEmitter<number>();

  selectedItemsPerPage: number = 12;

  ngOnInit() {
    if (this.itemsPerPageOptions.includes(this.defaultItemsPerPage)) {
      this.selectedItemsPerPage = this.defaultItemsPerPage;
    } else if (this.itemsPerPageOptions.length > 0) {
      this.selectedItemsPerPage = this.itemsPerPageOptions[0];
    }
    this.onItemsPerPageChange();
  }

  onItemsPerPageChange() {
    this.itemsPerPageChange.emit(this.selectedItemsPerPage);
  }
}