import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoMoneda } from '../models/tipoMoneda';
import { Response } from '../models/response';
import { TipoCambioRequest } from '../models/tipoCambioRequest';


const httpOption={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiTipoMonedaCambioService {

  url: string = 'https://localhost:44344/api/TipoMoneda';
  urlTipoCambio: string ='https://localhost:44344/api/TipoCambio';

  constructor(private _http: HttpClient) { }

  
  //TipoMoneda
  getMonedas(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  add(tipomoneda: TipoMoneda): Observable<Response>{
    return this._http.post<Response>(this.url, tipomoneda, httpOption)
  }
  edit(tipomoneda: TipoMoneda): Observable<Response>{
    return this._http.put<Response>(this.url, tipomoneda, httpOption)
  }

  delete(id: number): Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`);
  }

  //TipoCambio
  obtenerTipoCambioAplicado(tipoCambioRequest:TipoCambioRequest): Observable<Response>{
    return this._http.post<Response>(this.urlTipoCambio,tipoCambioRequest, httpOption);
  }
  
  getMostrarTipoCambio():Observable<Response>{
    return this._http.get<Response>(this.urlTipoCambio);
  }
}


