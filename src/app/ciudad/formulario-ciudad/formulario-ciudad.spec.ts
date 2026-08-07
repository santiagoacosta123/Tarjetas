import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCiudad } from './formulario-ciudad';

describe('FormularioCiudad', () => {
  let component: FormularioCiudad;
  let fixture: ComponentFixture<FormularioCiudad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCiudad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCiudad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
