import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDirecciones } from './actualizar-direcciones';

describe('ActualizarDirecciones', () => {
  let component: ActualizarDirecciones;
  let fixture: ComponentFixture<ActualizarDirecciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarDirecciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDirecciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
