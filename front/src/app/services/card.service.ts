import {environment} from "../../environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


export interface Card {
  name: String,
  dateExp: String,
  number: String,
  cvv: String,
  saldo: Number,
}

@Injectable({
  providedIn: 'root'
})

export class CardService {

    constructor(private http: HttpClient) {
    }

    url: string = environment.url;

    public getCard(id: string): Observable<Card> {
      const url = `${this.url}/tarjetas/${id}`;
      return this.http.get<Card>(url);
    }

}
