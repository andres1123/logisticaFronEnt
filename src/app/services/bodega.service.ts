import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../Interfaces/Cliente';
import { MedioAlmacenamiento } from '../Interfaces/MedioAlmacenamiento';
@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  constructor(private http:HttpClient) { }
  //Comunicación con el Backend
 private url:string='http://localhost:8080/medioAlmacenamiento';
  /*Obtencion de datos*/
  getBodega(){
    return this.http.get<MedioAlmacenamiento[]>(this.url);
  }
  eliminarBodega(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  guardarBodega(medioAlmacenamiento :MedioAlmacenamiento){
    return this.http.post(this.url,medioAlmacenamiento);
  }
}
