import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDonanteComponent } from './formulario-donante.component';

describe('FormularioDonanteComponent', () => {
  let component: FormularioDonanteComponent;
  let fixture: ComponentFixture<FormularioDonanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDonanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
