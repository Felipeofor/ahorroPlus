import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment";
import {Observable} from "rxjs";

export interface Menu{
  name: string;
  title: string;
  icon: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor(private http: HttpClient) {
  }
  url = environment.url;

  public getMenu(): Observable<Menu[]> {
    const url = `${this.url}/menu`;
    return this.http.get<Menu[]>(url);
  }

  public setMenu(menu: Menu): Observable<Menu> {
    const url = `${this.url}/menu`;
    return this.http.post<Menu>(url, menu);
  }


}
