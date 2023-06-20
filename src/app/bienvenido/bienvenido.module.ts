import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';



@NgModule({
  declarations: [
    BienvenidoComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    BienvenidoComponent
  ]
})
export class BienvenidoModule { }
