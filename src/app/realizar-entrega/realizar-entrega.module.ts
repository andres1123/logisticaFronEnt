import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealizarEntregaComponent } from './components/realizar-entrega/realizar-entrega.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RealizarEntregaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RealizarEntregaModule { }
