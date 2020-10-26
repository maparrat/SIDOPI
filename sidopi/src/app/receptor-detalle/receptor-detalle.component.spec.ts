import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptorDetalleComponent } from './receptor-detalle.component';

describe('ReceptorDetalleComponent', () => {
  let component: ReceptorDetalleComponent;
  let fixture: ComponentFixture<ReceptorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptorDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
