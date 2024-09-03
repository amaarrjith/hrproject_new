import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreductionComponent } from './viewreduction.component';

describe('ViewreductionComponent', () => {
  let component: ViewreductionComponent;
  let fixture: ComponentFixture<ViewreductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewreductionComponent]
    });
    fixture = TestBed.createComponent(ViewreductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
