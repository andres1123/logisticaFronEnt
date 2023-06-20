import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Interfaces/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-consulta-datos',
  templateUrl: './consulta-datos.component.html',
  styleUrls: ['./consulta-datos.component.css']
})
export class ConsultaDatosComponent implements OnInit{
 constructor(private clienteService :ClienteService){}
 cliente: Cliente[]=[];

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data=>{this.cliente=data})
  }

  onEliminar(id:number){
    this.clienteService.eliminar(id).subscribe(()=>{
      this.clienteService.getClientes().subscribe(data=>{this.cliente=data})
    })
  }
}
