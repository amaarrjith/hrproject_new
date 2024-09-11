import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpolicyComponent } from './addpolicy.component';

describe('AddpolicyComponent', () => {
  let component: AddpolicyComponent;
  let fixture: ComponentFixture<AddpolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpolicyComponent]
    });
    fixture = TestBed.createComponent(AddpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
