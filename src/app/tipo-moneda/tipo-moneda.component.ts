import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from '../common/dialogdelete.component';
import { TipoMoneda } from '../models/tipoMoneda';
import { ApiTipoMonedaCambioService } from '../services/api-tipo-moneda-cambio.service';
import { DialogTipoMonedaComponent } from './dialogTipoMoneda/dialogTipoMoneda.component';

@Component({
  selector: 'app-tipo-moneda',
  templateUrl: './tipo-moneda.component.html',
  styleUrls: ['./tipo-moneda.component.css']
})
export class TipoMonedaComponent implements OnInit {

  public lst: any[];
  public columnas: string[] = ['id','moneda','simbolo','valor','actions'];
  readonly width: string = '300px';

  constructor(
    private apiTipoMonedaCambioService: ApiTipoMonedaCambioService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getMonedas();
  }

  getMonedas(){
    this.apiTipoMonedaCambioService.getMonedas().subscribe(response =>{
      this.lst = response.data
    })
  }

  openAdd(){
    const dialogRef = this.dialog.open(DialogTipoMonedaComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getMonedas();
    });
  }

  openEdit(tipomoneda: TipoMoneda){
    const dialogRef = this.dialog.open(DialogTipoMonedaComponent, {
      width: this.width,
      data: tipomoneda
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getMonedas();
    });
  }

  
  delete(tipomoneda: TipoMoneda){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width      
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.apiTipoMonedaCambioService.delete(tipomoneda.id).subscribe(response =>{
          if(response.exito === 1){
            this.snackBar.open('Moneda eliminada con exito','',{duration:2000});
            this.getMonedas();
          }
        });
      }
    });
  }

}
