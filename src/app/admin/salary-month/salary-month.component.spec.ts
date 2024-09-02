import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryMonthComponent } from './salary-month.component';

describe('SalaryMonthComponent', () => {
  let component: SalaryMonthComponent;
  let fixture: ComponentFixture<SalaryMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryMonthComponent]
    });
    fixture = TestBed.createComponent(SalaryMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
