import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleavereductionComponent } from './empleavereduction.component';

describe('EmpleavereductionComponent', () => {
  let component: EmpleavereductionComponent;
  let fixture: ComponentFixture<EmpleavereductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleavereductionComponent]
    });
    fixture = TestBed.createComponent(EmpleavereductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
