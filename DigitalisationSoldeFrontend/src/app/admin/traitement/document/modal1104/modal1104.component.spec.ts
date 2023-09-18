import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1104Component } from './modal1104.component';

describe('Modal1104Component', () => {
  let component: Modal1104Component;
  let fixture: ComponentFixture<Modal1104Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1104Component]
    });
    fixture = TestBed.createComponent(Modal1104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
