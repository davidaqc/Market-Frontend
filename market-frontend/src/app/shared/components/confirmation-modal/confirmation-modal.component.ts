import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  template: `
    <div class="modal" tabindex="-1" [ngClass]="{'show d-block': isVisible}">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <p>{{ message }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="onCancel()">{{ cancelText }}</button>
            <button type="button" class="btn btn-danger" (click)="onConfirm()">{{ confirmText }}</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal {
      background-color: rgba(0,0,0,0.4);
    }
  `]
})
export class ConfirmationModalComponent {
  @Input() isVisible = false;
  @Input() message = '¿Estás seguro que querés quitar este artículo del carrito de compras?';
  @Input() cancelText = 'Cancelar';
  @Input() confirmText = 'Aceptar';
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
    this.isVisible = false;
  }

  onCancel() {
    this.cancel.emit();
    this.isVisible = false;
  }
}