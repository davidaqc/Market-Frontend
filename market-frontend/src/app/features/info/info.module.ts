import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { TermsAndConditionsPageComponent } from './pages/terms-and-conditions-page/terms-and-conditions-page.component';


@NgModule({
  declarations: [
    FaqPageComponent,
    ContactUsPageComponent,
    AboutUsPageComponent,
    TermsAndConditionsPageComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
