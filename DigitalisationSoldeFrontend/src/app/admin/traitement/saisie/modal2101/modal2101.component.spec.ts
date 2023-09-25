import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2101Component } from './modal2101.component';

describe('Modal2101Component', () => {
  let component: Modal2101Component;
  let fixture: ComponentFixture<Modal2101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal2101Component]
    });
    fixture = TestBed.createComponent(Modal2101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
