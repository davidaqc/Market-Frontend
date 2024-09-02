import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategorySliderComponent } from './components/category-list/category-slider.component';
import { BottomInfoComponent } from './components/bottom-info/bottom-info.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
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
