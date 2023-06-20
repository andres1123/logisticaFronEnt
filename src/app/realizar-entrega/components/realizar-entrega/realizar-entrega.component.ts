import { Component } from '@angular/core';

@Component({
  selector: 'app-realizar-entrega',
  templateUrl: './realizar-entrega.component.html',
  styleUrls: ['./realizar-entrega.component.css']
})
export class RealizarEntregaComponent {

  resultado : number = 0;
  placa :string=''
  puerto :string=''
  cantidad :number= 10
  subtotal:number=0;
  precio:number=0;
  consultarValor(){

    if (this.cantidad >= 10) {
      if (this.placa != '') {
        this.subtotal = (this.cantidad * this.precio) * 0.3 ;
        this.resultado =(this.cantidad * this.precio) - this.subtotal
      } else {
        this.subtotal = (this.cantidad *this. precio) * 0.5 ;
        this.resultado =(this.cantidad *this. precio) - this.subtotal
            }

    } else{
      this.resultado = (this.cantidad * this.precio)
    }



    alert("El valor total a pagar es " + this.resultado)
  }

}
