import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMonedaComponent } from './tipo-moneda.component';

describe('TipoMonedaComponent', () => {
  let component: TipoMonedaComponent;
  let fixture: ComponentFixture<TipoMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMonedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
