import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
