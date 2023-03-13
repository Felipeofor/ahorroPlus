import { DataSource } from "@angular/cdk/collections";
import {Component, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import { IngresoService } from "src/app/services/ingreso.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface ingresos {
  nro: Number,
  fecha: Date,
  monto: Number,
  referencia: String,
  paratodalavida: Number,
  gastosbasicos: Number,
  gastosdelargoplazo: Number,
  gastosdecortoplazo: Number,
  emergencias: Number,
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnChanges, OnInit, OnDestroy {
  data: any;
  dataSource: any;

  displayedColumns: string[] = ['fecha', 'monto', 'referencia','paratodalavida', 'gastosBasicos', 'gastosDeLargoPlazo', 'gastosDeCortoPlazo', 'emergencias', 'editar/eliminar'];
  subscription: Subscription;
  monto = new FormControl(600000, [Validators.required, Validators.min(0)]);
  referencia = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(private ingresoService: IngresoService) {
    this.cargar()
  }

  ngOnInit(): void {
    this.subscription = this.ingresoService.refreshNeeded.subscribe(
      () => {
        this.cargar();
      }
    );
  }

  ngOnChanges() {
    console.log(this.data, 'ngOnChanges'
    );
    this.data
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  cargar() {
    this.ingresoService.getIngreso().subscribe(
      (ingresos: ingresos) => {
        this.data = ingresos;
        this.dataSource = new MatTableDataSource(this.data);
        }
      );
  }


  submit() {
    const monto = this.monto.value!;
    const referencia = this.referencia.value!;
    if (!this.monto.invalid && !this.referencia.invalid) {
      this.ingresoService.postIngreso(monto, referencia).subscribe(
        (ingreso) => {
          console.log(ingreso);
        }
      );
    }
  }

  delete(id: string) {
    this.ingresoService.deleteIngreso(id).subscribe(
      (ingreso) => {
        this.dataSource = this.ingresoService.getIngreso();
      }
    );
  }

  edit(id: string, date: Date) {
    const monto = this.monto.value!;
    const referencia = this.referencia.value!;
    this.ingresoService.putIngreso(id, monto, referencia, date).subscribe(
      (ingreso) => {
        console.log(ingreso);
      }
    );
  }

}
