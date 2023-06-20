import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CrearClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ],
  exports : [
    CrearClienteComponent
  ]
})
export class CrearClienteModule { }
