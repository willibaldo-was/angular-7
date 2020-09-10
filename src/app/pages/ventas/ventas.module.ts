import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasPageRoutingModule } from './ventas-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';

import { VentasPage } from './ventas.page';

import { registerLocaleData } from '@angular/common';
import localDe from '@angular/common/locales/es-MX'
registerLocaleData(localDe);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [VentasPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX'}
  ]
})
export class VentasPageModule {}
