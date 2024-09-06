import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeereductionComponent } from './employeereduction.component';

describe('EmployeereductionComponent', () => {
  let component: EmployeereductionComponent;
  let fixture: ComponentFixture<EmployeereductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeereductionComponent]
    });
    fixture = TestBed.createComponent(EmployeereductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
