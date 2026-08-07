import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPaises } from './listar-paises';

describe('ListarPaises', () => {
  let component: ListarPaises;
  let fixture: ComponentFixture<ListarPaises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPaises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPaises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
