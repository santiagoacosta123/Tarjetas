import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPaises } from './formulario-paises';

describe('FormularioPaises', () => {
  let component: FormularioPaises;
  let fixture: ComponentFixture<FormularioPaises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPaises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPaises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
