import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1103Component } from './modal1103.component';

describe('Modal1103Component', () => {
  let component: Modal1103Component;
  let fixture: ComponentFixture<Modal1103Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1103Component]
    });
    fixture = TestBed.createComponent(Modal1103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
