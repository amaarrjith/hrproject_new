import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepolicyComponent } from './updatepolicy.component';

describe('UpdatepolicyComponent', () => {
  let component: UpdatepolicyComponent;
  let fixture: ComponentFixture<UpdatepolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepolicyComponent]
    });
    fixture = TestBed.createComponent(UpdatepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
