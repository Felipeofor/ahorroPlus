import {environment} from "../../environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


export interface Cuota {
  montoTotal: String,
  cuotasPagas: String,
  cuotasTotal: String,
  fechaEmision: Date,
  fechaVencimiento: Date,
  interes: String,
  estado: String,
  montoCuota: String,
}
@Injectable({
  providedIn: 'root'
})

export class CuotasService {

      constructor(private http: HttpClient) {
      }

      url: string = environment.url;

      public getCuotas(): Observable<Cuota> {
        const url = `${this.url}/cuotas`;
        return this.http.get<Cuota>(url);
      }
}
