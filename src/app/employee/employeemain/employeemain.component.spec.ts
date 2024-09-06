import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemainComponent } from './employeemain.component';

describe('EmployeemainComponent', () => {
  let component: EmployeemainComponent;
  let fixture: ComponentFixture<EmployeemainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeemainComponent]
    });
    fixture = TestBed.createComponent(EmployeemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
