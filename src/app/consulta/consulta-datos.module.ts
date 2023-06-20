import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaDatosComponent } from './consulta-datos/consulta-datos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ConsultaDatosComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ConsultaDatosComponent,
    HttpClientModule
  ]
})
export class ConsultaDatosModule { }
