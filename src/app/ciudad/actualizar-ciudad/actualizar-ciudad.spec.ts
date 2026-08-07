import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCiudad } from './actualizar-ciudad';

describe('ActualizarCiudad', () => {
  let component: ActualizarCiudad;
  let fixture: ComponentFixture<ActualizarCiudad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarCiudad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCiudad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
