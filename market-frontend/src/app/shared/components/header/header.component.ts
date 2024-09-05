import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isShoppingCartVisible = false;
  isSearchResultsVisible = false;
  cartItemCount = 0;

  toggleShoppingCart(event: Event) {
    event.stopPropagation();
    this.isShoppingCartVisible = !this.isShoppingCartVisible;
    this.isSearchResultsVisible = false;
  }

  toggleSearchResults(event: Event) {
    event.stopPropagation();
    this.isSearchResultsVisible = !this.isSearchResultsVisible;
    this.isShoppingCartVisible = false;
  }

  closeShoppingCart() {
    this.isShoppingCartVisible = false;
  }

  closeSearchResults() {
    this.isSearchResultsVisible = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.isShoppingCartVisible = false;
    this.isSearchResultsVisible = false;
  }

}
