import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeeleaveComponent } from './viewemployeeleave.component';

describe('ViewemployeeleaveComponent', () => {
  let component: ViewemployeeleaveComponent;
  let fixture: ComponentFixture<ViewemployeeleaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewemployeeleaveComponent]
    });
    fixture = TestBed.createComponent(ViewemployeeleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
