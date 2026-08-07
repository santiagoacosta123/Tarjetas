import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasCiudad } from './tarjetas-ciudad';

describe('TarjetasCiudad', () => {
  let component: TarjetasCiudad;
  let fixture: ComponentFixture<TarjetasCiudad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasCiudad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasCiudad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
