import {Component, OnInit} from "@angular/core";
import {BalanceService} from "../../services/balance.service";
import {Color, ScaleType} from "@swimlane/ngx-charts";



@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})

export class BalanceComponent implements OnInit {
  data: any;
  view: [number, number] = [550, 320];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  legendTitle: string = 'Semana';
  xAxisLabel: string = 'Semana';
  yAxisLabel: string = 'Monto';
  timeline: boolean = true;
  showGridLines: boolean = true;


  colorScheme: Color = {
    domain: ['#99CCE5', '#FF7F7F'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor(private balanceService: BalanceService) {
    this.balance();
  }

  ngOnInit() {

  }

  balance() {
    this.balanceService.getBalance().subscribe(res => {
      this.data = res;
    });
  }

}
