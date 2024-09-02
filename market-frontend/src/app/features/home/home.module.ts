import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import { BottomInfoComponent } from './components/bottom-info/bottom-info.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    HomePageComponent,
    BannerSliderComponent,
    CategorySliderComponent,
    BottomInfoComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
