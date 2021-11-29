import { TestBed } from '@angular/core/testing';

import { ApiTipoMonedaCambioService } from './api-tipo-moneda-cambio.service';

describe('ApiTipoMonedaCambioService', () => {
  let service: ApiTipoMonedaCambioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTipoMonedaCambioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
