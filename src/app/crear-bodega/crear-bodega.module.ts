import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearBodegaComponent } from './components/crear-bodega/crear-bodega.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrearBodegaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[]
})
export class CrearBodegaModule { }
