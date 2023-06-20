import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from './menu/menu.module';
import { CrearClienteModule } from './crear-cliente/crear-cliente.module';
import { CrearBodegaModule } from './crear-bodega/crear-bodega.module';
import { RealizarEntregaModule } from './realizar-entrega/realizar-entrega.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BienvenidoModule } from './bienvenido/bienvenido.module';
import { ConsultaDatosComponent } from './consulta/consulta-datos/consulta-datos.component';
import { ConsultaDatosModule } from './consulta/consulta-datos.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    CrearClienteModule,
    CrearBodegaModule,
    RealizarEntregaModule,
    BienvenidoModule,
    ConsultaDatosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
