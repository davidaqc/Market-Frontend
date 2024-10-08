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
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SucessAlertComponent } from './components/sucess-alert/sucess-alert.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SortOptionsComponent } from './components/sort-options/sort-options.component';
import { ItemsPerPageComponent } from './components/items-per-page/items-per-page.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    OffcanvasMenuComponent,
    ShoppingCartSummaryComponent,
    AutocompleteSearchComponent,
    WarningAlertComponent,
    SucessAlertComponent,
    ConfirmationModalComponent,
    BreadcrumbComponent,
    SortOptionsComponent,
    ItemsPerPageComponent,
    PaginationComponent
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
    FooterComponent,
    WarningAlertComponent,
    SucessAlertComponent,
    ConfirmationModalComponent,
    BreadcrumbComponent,
    SortOptionsComponent,
    ItemsPerPageComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
