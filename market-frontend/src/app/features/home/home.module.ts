import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { BottomInfoComponent } from './components/bottom-info/bottom-info.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
    CategoryListComponent,
    BottomInfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
