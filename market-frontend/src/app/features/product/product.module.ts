import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductDetailsTabComponent } from './components/product-details-tab/product-details-tab.component';
import { ProductRatingsTabComponent } from './components/product-ratings-tab/product-ratings-tab.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';


@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductDetailPageComponent,
    PriceFilterComponent,
    ProductCardComponent,
    ProductImagesComponent,
    ProductInfoComponent,
    ProductDetailsTabComponent,
    ProductRatingsTabComponent,
    QuantitySelectorComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ProductModule { }
