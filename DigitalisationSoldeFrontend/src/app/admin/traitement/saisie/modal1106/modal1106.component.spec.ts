import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1106Component } from './modal1106.component';

describe('Modal1106Component', () => {
  let component: Modal1106Component;
  let fixture: ComponentFixture<Modal1106Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1106Component]
    });
    fixture = TestBed.createComponent(Modal1106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
