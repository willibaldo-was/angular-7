import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaDetailPageRoutingModule } from './venta-detail-routing.module';

import { VentaDetailPage } from './venta-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentaDetailPageRoutingModule
  ],
  declarations: [VentaDetailPage]
})
export class VentaDetailPageModule {}
