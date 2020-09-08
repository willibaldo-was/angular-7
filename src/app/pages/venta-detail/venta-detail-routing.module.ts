import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaDetailPage } from './venta-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VentaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaDetailPageRoutingModule {}
