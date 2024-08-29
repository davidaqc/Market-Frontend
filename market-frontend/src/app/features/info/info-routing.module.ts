import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

const routes: Routes = [
  { path: 'faq', component: FaqPageComponent },
  { path: 'contact-us', component: ContactUsPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
