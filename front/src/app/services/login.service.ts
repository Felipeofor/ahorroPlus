import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  url: string = environment.url;

  public login(tipoDocumento: string, nroDocumento: string, clave: string): Observable<any> {
    const url = `${this.url}/login`;
    const body = {
      tipoDocumento,
      nroDocumento,
      clave,
    };
    return this.http.post<any>(url, body, {responseType: 'text' as 'json'});
  }

  public registrar(tipoDocumento: string, nroDocumento: string, clave: string): Observable<any> {
    const url = `${this.url}/login/register`;
    const body = {
      tipoDocumento,
      nroDocumento,
      clave,
    };
    return this.http.post<any>(url, body, {responseType: 'text' as 'json'});
  }

}
