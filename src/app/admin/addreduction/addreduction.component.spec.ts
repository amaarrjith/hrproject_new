import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreductionComponent } from './addreduction.component';

describe('AddreductionComponent', () => {
  let component: AddreductionComponent;
  let fixture: ComponentFixture<AddreductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddreductionComponent]
    });
    fixture = TestBed.createComponent(AddreductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
