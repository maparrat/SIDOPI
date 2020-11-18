import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptorTriageComponent } from './receptor-triage.component';

describe('ReceptorTriageComponent', () => {
  let component: ReceptorTriageComponent;
  let fixture: ComponentFixture<ReceptorTriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptorTriageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptorTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
