import {Component, Input, OnInit} from "@angular/core";


@Component({
  selector: 'app-ingresos-egresos',
  templateUrl: './ingresos-egresos.component.html',
  styleUrls: ['./ingresos-egresos.component.scss'],
})

export class IngresosEgresosComponent implements OnInit{

  @Input() leyenda: string;
  @Input() monto: string
  @Input() variacion: string;
  @Input() icono: string;
  public color: string;

  constructor() {
    this.leyenda = '';
    this.monto = '';
    this.variacion = '';
    this.color = '';
    this.icono = '';
  }

  ngOnInit(): void {
    this.colorVariacion();
  }

  colorVariacion(): void{
    const validar = parseInt(this.variacion)
    if (validar >= 0) {
      this.color = 'green';
      this.icono = 'arrow_upward';
    } else if (validar < 0) {
      this.color =  'red';
      this.icono = 'arrow_downward';
    } else {
      this.color = 'black';
      this.icono = 'remove';
    }
  }

}
