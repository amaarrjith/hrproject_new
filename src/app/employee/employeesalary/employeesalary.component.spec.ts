import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesalaryComponent } from './employeesalary.component';

describe('EmployeesalaryComponent', () => {
  let component: EmployeesalaryComponent;
  let fixture: ComponentFixture<EmployeesalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesalaryComponent]
    });
    fixture = TestBed.createComponent(EmployeesalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
