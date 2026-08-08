import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDirecciones } from './crear-direcciones';

describe('CrearDirecciones', () => {
  let component: CrearDirecciones;
  let fixture: ComponentFixture<CrearDirecciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearDirecciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDirecciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
