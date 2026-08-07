import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDirecciones } from './listar-direcciones';

describe('ListarDirecciones', () => {
  let component: ListarDirecciones;
  let fixture: ComponentFixture<ListarDirecciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarDirecciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDirecciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
