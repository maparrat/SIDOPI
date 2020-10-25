import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonanteDetalleComponent } from './donante-detalle.component';

describe('DonanteDetalleComponent', () => {
  let component: DonanteDetalleComponent;
  let fixture: ComponentFixture<DonanteDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonanteDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonanteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
