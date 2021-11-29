import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TipoMoneda } from "src/app/models/tipoMoneda";
import { ApiTipoMonedaCambioService } from "src/app/services/api-tipo-moneda-cambio.service";


@Component({
    templateUrl:'dialogTipoMoneda.component.html'
})

export class DialogTipoMonedaComponent{
    public moneda: string;
    public simbolo: string;
    public valor: string;

    constructor(
        public dialogRef: MatDialogRef<DialogTipoMonedaComponent>,
        public apiTipoMonedaCambioService: ApiTipoMonedaCambioService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public tipomoneda: TipoMoneda         
        
    ){
        if(this.tipomoneda !== null){
            this.moneda = tipomoneda.moneda;
            this.simbolo = tipomoneda.simbolo;
            this.valor = tipomoneda.valor;
        }
    }
    close(){
        this.dialogRef.close(); 
    }

    editMoneda(){
        const tipomoneda: TipoMoneda = { moneda:this.moneda,simbolo:this.simbolo, valor:this.valor, id:this.tipomoneda.id };
        this.apiTipoMonedaCambioService.edit(tipomoneda).subscribe(response =>{
            if(response.exito == 1){
                this.dialogRef.close();
                this.snackBar.open('Moneda editada con éxito.','', {duration:2000} );
            }
        });
    }

    addMoneda(){
        const tipomoneda: TipoMoneda = {moneda: this.moneda, simbolo: this.simbolo, valor: this.valor, id:0 };
        this.apiTipoMonedaCambioService.add(tipomoneda).subscribe(response =>{
            if(response.exito == 1){
                this.dialogRef.close();
                this.snackBar.open('Moneda registrada con éxito.','', {duration:2000} );
            }
        });
    }

    
}