import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonanteComponent } from './donante.component';

describe('DonanteComponent', () => {
  let component: DonanteComponent;
  let fixture: ComponentFixture<DonanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
