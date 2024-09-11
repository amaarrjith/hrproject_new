import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmessagebyidComponent } from './viewmessagebyid.component';

describe('ViewmessagebyidComponent', () => {
  let component: ViewmessagebyidComponent;
  let fixture: ComponentFixture<ViewmessagebyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmessagebyidComponent]
    });
    fixture = TestBed.createComponent(ViewmessagebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
