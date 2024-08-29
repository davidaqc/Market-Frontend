import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';


@NgModule({
  declarations: [
    FaqPageComponent,
    ContactUsPageComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
