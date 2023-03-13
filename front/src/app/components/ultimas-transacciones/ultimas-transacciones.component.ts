import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {UltimasTransaccionesService} from "../../services/ultimasTransacciones.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-ultimas-transacciones',
  templateUrl: './ultimas-transacciones.component.html',
  styleUrls: ['./ultimas-transacciones.component.scss']
})

export class UltimasTransaccionesComponent implements OnInit, AfterViewInit {

  dataSource: any;
  displayedColumns: string[] = ['icono', 'nombre', 'monto', 'fecha', 'estado', 'mas'];
  public transactions: any;
  public pageSize: any = 5;
  public currentPage: any = 1;
  public collectionSize: any = 0;

  constructor(private ultimasTransaccionesService: UltimasTransaccionesService) {

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.ultimasTransacciones();
  }

  ngOnInit(): void {
  }

  ultimasTransacciones() {
    this.ultimasTransaccionesService.getUltimasTransacciones().subscribe(
      (data) => {
        this.transactions = data;
        this.dataSource = new MatTableDataSource<any>(this.transactions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator._intl.itemsPerPageLabel = 'Mostrar';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public pageChange(event: any): void {
    console.log(event);
  }

  public changeIcon(estado: string): string {
    if (estado == 'Completado') {
      return 'check_circle';
    } else if (estado == 'Cancelado') {
      return 'cancel';
    } else {
      return 'help';
    }
  }

  changeColor(estado: string): string {
    if (estado == 'Completado') {
      return 'green';
    } else if (estado == 'Cancelado') {
      return 'red';
    } else {
      return 'blue';
    }
  }


}
