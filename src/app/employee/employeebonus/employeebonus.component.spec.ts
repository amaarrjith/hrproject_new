import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeebonusComponent } from './employeebonus.component';

describe('EmployeebonusComponent', () => {
  let component: EmployeebonusComponent;
  let fixture: ComponentFixture<EmployeebonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeebonusComponent]
    });
    fixture = TestBed.createComponent(EmployeebonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
