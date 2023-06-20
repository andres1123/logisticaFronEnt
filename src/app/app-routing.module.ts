import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/components/menu/menu.component';
import { CrearClienteComponent } from './crear-cliente/components/crear-cliente/crear-cliente.component';
import { CrearBodegaComponent } from './crear-bodega/components/crear-bodega/crear-bodega.component';
import { RealizarEntregaComponent } from './realizar-entrega/components/realizar-entrega/realizar-entrega.component';
import { BienvenidoComponent } from './bienvenido/bienvenido/bienvenido.component';
import { ConsultaDatosComponent } from './consulta/consulta-datos/consulta-datos.component';

const routes: Routes = [

  {
    path:'crear-cliente',
    component:CrearClienteComponent
  },
  {
    path:'crear-bodega',
    component:CrearBodegaComponent
  },
  {
    path:'realizar-entrega',
    component:RealizarEntregaComponent
  },
  {
    path:'bienvenido',
    component:BienvenidoComponent
  },
  {
    path:'consulta-datos',
    component:ConsultaDatosComponent
  },
  {
    path: '**',
    redirectTo: 'bienvenido'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
