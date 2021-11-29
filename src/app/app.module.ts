import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TipoMonedaComponent } from './tipo-moneda/tipo-moneda.component';
import { TipoCambioComponent } from './tipo-cambio/tipo-cambio.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule} from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule} from '@angular/forms';
import { DialogDeleteComponent } from './common/dialogdelete.component';
import { DialogTipoMonedaComponent } from './tipo-moneda/dialogTipoMoneda/dialogTipoMoneda.component';
import { DialogTipoCambioComponent } from './tipo-cambio/dialogTipoCambio/dialogTipoCambio.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoMonedaComponent,
    TipoCambioComponent,
    DialogDeleteComponent,
    DialogTipoMonedaComponent,
    DialogDeleteComponent,
    DialogTipoCambioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
