import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1105Component } from './modal1105.component';

describe('Modal1105Component', () => {
  let component: Modal1105Component;
  let fixture: ComponentFixture<Modal1105Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1105Component]
    });
    fixture = TestBed.createComponent(Modal1105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
