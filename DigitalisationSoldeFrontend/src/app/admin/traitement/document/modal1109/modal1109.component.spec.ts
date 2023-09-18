import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1109Component } from './modal1109.component';

describe('Modal1109Component', () => {
  let component: Modal1109Component;
  let fixture: ComponentFixture<Modal1109Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1109Component]
    });
    fixture = TestBed.createComponent(Modal1109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
