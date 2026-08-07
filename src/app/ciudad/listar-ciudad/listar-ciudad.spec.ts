import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCiudad } from './listar-ciudad';

describe('ListarCiudad', () => {
  let component: ListarCiudad;
  let fixture: ComponentFixture<ListarCiudad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCiudad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCiudad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
