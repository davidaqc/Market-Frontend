import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OffcanvasMenuComponent } from './components/header/offcanvas-menu/offcanvas-menu.component';
import { ShoppingCartSummaryComponent } from './components/header/shopping-cart-summary/shopping-cart-summary.component';
import { AutocompleteSearchComponent } from './components/header/autocomplete-search/autocomplete-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    OffcanvasMenuComponent,
    ShoppingCartSummaryComponent,
    AutocompleteSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbPopoverModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
