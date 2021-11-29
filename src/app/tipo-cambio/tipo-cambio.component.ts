import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiTipoMonedaCambioService } from '../services/api-tipo-moneda-cambio.service';
import { DialogTipoCambioComponent } from './dialogTipoCambio/dialogTipoCambio.component';

@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.css']
})
export class TipoCambioComponent implements OnInit {

  public lst: any[];
  public columnas: string[] = ['monto','monedaOrigen','monedaDestino','tipoDeCambio','montoConTipoCambio'];
  readonly width: string = '300px';

  constructor(
    private apiTipoMonedaCambioService: ApiTipoMonedaCambioService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getMostrarTipoCambio();
  }

  getMostrarTipoCambio(){
    this.apiTipoMonedaCambioService.getMostrarTipoCambio().subscribe(response => {
      this.lst = response.data;
    });
  }

  openAddTipoCambio(){
    const dialogRef = this.dialog.open(DialogTipoCambioComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getMostrarTipoCambio();
    });
  }

}
