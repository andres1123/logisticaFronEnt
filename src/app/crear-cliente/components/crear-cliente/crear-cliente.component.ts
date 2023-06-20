import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/Interfaces/Cliente';


@Component({
  selector: 'logistica-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
cliente:Cliente=new Cliente();

  constructor(private router:Router, private clienteService:ClienteService){

  }

  guardarCliente(cliente:Cliente){
    this.clienteService.guardarCliente(cliente).subscribe(data=>{
      console.log(data);


      alert("Se creo con exito el cliente");

    })
  }
}
