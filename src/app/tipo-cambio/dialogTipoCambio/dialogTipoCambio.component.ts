import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TipoCambioRequest } from '../../models/tipoCambioRequest';
import { ApiTipoMonedaCambioService } from "src/app/services/api-tipo-moneda-cambio.service";

@Component({
    templateUrl: 'dialogTipoCambio.component.html' 
})

export class DialogTipoCambioComponent{
    public monto: number;
    public monedaOrigen: string;
    public monedaDestino: string;

    constructor(
        public dialogRef: MatDialogRef<DialogTipoCambioComponent>,
        public apiTipoMonedaCambioService: ApiTipoMonedaCambioService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public tipoCambioRequest: TipoCambioRequest     
        
    ){
        if(this.tipoCambioRequest !== null){
            this.monto = tipoCambioRequest.monto;
            this.monedaOrigen = tipoCambioRequest.monedaOrigen;
            this.monedaDestino = tipoCambioRequest.monedaDestino;
        }
        
    }
    close(){
        this.dialogRef.close(); 
    }

    addTipoCambio(){
        const tipoCambioRequest: TipoCambioRequest = {monto: this.monto, monedaOrigen: this.monedaOrigen, monedaDestino: this.monedaDestino};
        this.apiTipoMonedaCambioService.obtenerTipoCambioAplicado(tipoCambioRequest).subscribe(response =>{
            if(response.exito == 1){
                this.dialogRef.close();
                this.snackBar.open('Tipo de Cambio se realizo con éxito.','', {duration:3000} );
            }else{
                this.dialogRef.close();
                this.snackBar.open(response.mensaje,'', {duration:4000} );
                
            }
        });
    }

}