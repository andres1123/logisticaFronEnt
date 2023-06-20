import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedioAlmacenamiento } from 'src/app/Interfaces/MedioAlmacenamiento';
import { BodegaService } from 'src/app/services/bodega.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'logistica-crear-bodega',
  templateUrl: './crear-bodega.component.html',
  styleUrls: ['./crear-bodega.component.css']
})
export class CrearBodegaComponent {
  medioAlmacenamiento = new MedioAlmacenamiento();
  constructor(private router: Router, private clienteService: ClienteService, private bodegaService: BodegaService) {
  }
  guardarMedioAlmacenamiento(medioAlmacenamiento: MedioAlmacenamiento) {
    this.bodegaService.guardarBodega(medioAlmacenamiento).subscribe(data => {
      console.log(data);


      alert("Se creo con exito la bodega");

    })
  }
}
