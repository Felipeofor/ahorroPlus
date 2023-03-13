import {Component, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";
import {formatCurrency} from "@angular/common";

@Component({
  selector: 'app-creditCard',
  templateUrl: './creditCard.component.html',
  styleUrls: ['./creditCard.component.scss']
})
export class CreditCardComponent implements OnInit {

  public card: any;
  public numeroTarjeta: string;
  public monto: string;

  constructor(private cardService: CardService) {
    this.numeroTarjeta = '';
    this.monto = '';
  }

  ngOnInit(): void {
    // Id de la tarjeta de prueba
    this.obtenerTarjeta('63e7ede62ef0c86f3c5e538f');
  }

  obtenerTarjeta(id: string): void {
    this.cardService.getCard(id).subscribe(
      (card) => {
        this.card = card;
        this.numeroTarjeta = this.card[0].number.slice(8, 12);
        this.monto = formatCurrency(this.card[0].saldo, 'en-US', '$', 'USD', '1.2-2');
      },
    );
  }

  // formato moneda estadounidense

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value);
  }

}
