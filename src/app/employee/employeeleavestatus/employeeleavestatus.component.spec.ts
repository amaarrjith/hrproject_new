import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeleavestatusComponent } from './employeeleavestatus.component';

describe('EmployeeleavestatusComponent', () => {
  let component: EmployeeleavestatusComponent;
  let fixture: ComponentFixture<EmployeeleavestatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeleavestatusComponent]
    });
    fixture = TestBed.createComponent(EmployeeleavestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
