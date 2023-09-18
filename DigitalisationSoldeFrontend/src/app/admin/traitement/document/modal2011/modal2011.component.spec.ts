import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2011Component } from './modal2011.component';

describe('Modal2011Component', () => {
  let component: Modal2011Component;
  let fixture: ComponentFixture<Modal2011Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal2011Component]
    });
    fixture = TestBed.createComponent(Modal2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
