import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2021Component } from './modal2021.component';

describe('Modal2021Component', () => {
  let component: Modal2021Component;
  let fixture: ComponentFixture<Modal2021Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal2021Component]
    });
    fixture = TestBed.createComponent(Modal2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
