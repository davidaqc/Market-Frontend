import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OffcanvasMenuComponent } from './components/header/offcanvas-menu/offcanvas-menu.component';
import { ShoppingCartSummaryComponent } from './components/header/shopping-cart-summary/shopping-cart-summary.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    OffcanvasMenuComponent,
    ShoppingCartSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
