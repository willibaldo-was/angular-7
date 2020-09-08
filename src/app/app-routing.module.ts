import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {    path: 'home',    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  {    path: '',    redirectTo: 'home',    pathMatch: 'full'  },
  {
    path: 'ventas',
    loadChildren: () => import('./pages/ventas/ventas.module').then( m => m.VentasPageModule)
  },
  {
    path: 'venta-detail/:id',
    loadChildren: () => import('./pages/venta-detail/venta-detail.module').then( m => m.VentaDetailPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'ticket',
    children:[
      {
        path:"",
        loadChildren: () => import('./pages/ticket/ticket.module').then( m => m.TicketPageModule)
      },
      {
        path:":ticketId",
        loadChildren: () => import('./pages/ticket-detail/ticket-detail.module').then( m => m.TicketDetailPageModule)
      }
    ]
  },
  {
    path: 'crear-producto',
    loadChildren: () => import('./pages/crear-producto/crear-producto.module').then( m => m.CrearProductoPageModule)
  },
  {
    path: 'editar-producto',
    loadChildren: () => import('./pages/editar-producto/editar-producto.module').then( m => m.EditarProductoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
