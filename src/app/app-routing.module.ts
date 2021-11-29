import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoCambioComponent } from './tipo-cambio/tipo-cambio.component';
import { TipoMonedaComponent } from './tipo-moneda/tipo-moneda.component';

const routes: Routes = [
  {path:'', redirectTo:'/tipo-moneda', pathMatch:'full'},
  {path:'tipo-moneda', component: TipoMonedaComponent},
  {path:'tipo-cambio', component: TipoCambioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
