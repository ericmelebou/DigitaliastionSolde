import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1107Component } from './modal1107.component';

describe('Modal1107Component', () => {
  let component: Modal1107Component;
  let fixture: ComponentFixture<Modal1107Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1107Component]
    });
    fixture = TestBed.createComponent(Modal1107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
