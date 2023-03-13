import {environment} from "../../environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {tap} from "rxjs/operators";


export interface Ingreso {
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

@Injectable({
  providedIn: 'root'
})

export class IngresoService {

    private _refreshNeeded$ = new Subject<void>();
    constructor(private http: HttpClient) {
    }
    url: string = environment.url;

    get refreshNeeded(){
      return this._refreshNeeded$;
    }

    public getIngreso(): Observable<Ingreso> {
      const url = `${this.url}/ingreso`;
      return this.http.get<Ingreso>(url);
    }

    public postIngreso(monto: number, referencia : string): Observable<Ingreso> {
      console.log(monto, 'ingreso');
      const url = `${this.url}/ingreso`;
      const body = {
        monto,
        referencia,
      };
      return this.http.post<Ingreso>(url, body).pipe(
        tap(() => {
          this.refreshNeeded.next();
        })
      )
    }

    public putIngreso(id: string, monto: number, referencia : string, fecha: Date): Observable<any> {
      const url = `${this.url}/ingreso/actualizar`;
      const body = {
        monto,
        referencia,
        id,
        fecha
      };
      return this.http.post<any>(url, body).pipe(
        tap(() => {
          this.refreshNeeded.next();
        })
      )
    }

    public deleteIngreso(id: string): Observable<any> {
      const url = `${this.url}/ingreso/delete`;
      console.log(id);
      const body = {
        id,
      };
      return this.http.post<any>(url, body).pipe(
        tap(() => {
          this.refreshNeeded.next();
        })
      )
    }

}
