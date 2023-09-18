import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1102Component } from './modal1102.component';

describe('Modal1102Component', () => {
  let component: Modal1102Component;
  let fixture: ComponentFixture<Modal1102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1102Component]
    });
    fixture = TestBed.createComponent(Modal1102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
