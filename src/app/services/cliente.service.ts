import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../Interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http:HttpClient) { }
  //Comunicación con el Backend
 private url:string='http://localhost:8080';
  /*Obtencion de datos*/
  getClientes(){
    return this.http.get<Cliente[]>(this.url);
  }
  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  guardarCliente(cliente :Cliente){
    return this.http.post(this.url,cliente);
  }

}
