import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPaises } from './actualizar-paises';

describe('ActualizarPaises', () => {
  let component: ActualizarPaises;
  let fixture: ComponentFixture<ActualizarPaises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarPaises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPaises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
