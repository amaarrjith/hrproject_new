import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewattendacebyidComponent } from './viewattendacebyid.component';

describe('ViewattendacebyidComponent', () => {
  let component: ViewattendacebyidComponent;
  let fixture: ComponentFixture<ViewattendacebyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewattendacebyidComponent]
    });
    fixture = TestBed.createComponent(ViewattendacebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
