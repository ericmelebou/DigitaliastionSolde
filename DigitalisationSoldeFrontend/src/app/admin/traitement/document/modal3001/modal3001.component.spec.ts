import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal3001Component } from './modal3001.component';

describe('Modal3001Component', () => {
  let component: Modal3001Component;
  let fixture: ComponentFixture<Modal3001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal3001Component]
    });
    fixture = TestBed.createComponent(Modal3001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
