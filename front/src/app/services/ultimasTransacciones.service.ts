import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environment";

//Interfaces
export interface UltimasTransacciones {
  name: String,
  monto: Number,
  fecha: Date,
  estado: String,
  tipo: String,
}

@Injectable({
  providedIn: 'root'
})
export class UltimasTransaccionesService {

  constructor(private http: HttpClient) {
  }

  url: string = environment.url;


  public getUltimasTransacciones(): Observable<UltimasTransacciones> {
    const url = `${this.url}/ultimas-transacciones`;
    return this.http.get<UltimasTransacciones>(url);
  }
}
