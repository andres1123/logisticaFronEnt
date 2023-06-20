import { Cliente } from "./Cliente";

export class MedioAlmacenamiento{
  constructor() {

  }
  IdMedioAlmacenamiento : number=0;
  nombre:string='';
  ubicacion:string='';
  tipoAlmacenamiento:string='';
  idCliente:Cliente=new Cliente();
}
