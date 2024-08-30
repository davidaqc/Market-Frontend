import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isShoppingCartVisible = false;

  toggleShoppingCart(event: Event) {
    event.stopPropagation();
    this.isShoppingCartVisible = !this.isShoppingCartVisible;
  }

  closeShoppingCart() {
    this.isShoppingCartVisible = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isShoppingCartVisible) {
      this.isShoppingCartVisible = false;
    }
  }

}
