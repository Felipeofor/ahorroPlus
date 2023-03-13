import {Component} from "@angular/core";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {CuotasService} from "../../services/cuotas.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-cuotas-tabla',
  templateUrl: './cuotas-tabla.component.html',
  styleUrls: ['./cuotas-tabla.component.scss']
})

export class CuotasTablaComponent {
  displayedColumns: string[] = ['Monto Total', 'Cuotas', 'Fecha de emisión', 'Mensual', 'Tasa de interes', 'botones', 'mas'];
  selection = new SelectionModel<PeriodicElement>(true, []);
  public cuotas: any;
  public dataSource: any;

  constructor(private cuotasService: CuotasService) {
  this.getCuotas();
  }

  getCuotas(): void {
    this.cuotasService.getCuotas().subscribe(
      (cuotas) => {
        this.cuotas = cuotas;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.cuotas);
      },
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  formatCurrency(value: string): string {
    const monto = Number(value);
    return new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(monto);
  }

}
