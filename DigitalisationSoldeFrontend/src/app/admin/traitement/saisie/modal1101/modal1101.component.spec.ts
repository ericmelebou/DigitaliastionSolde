import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1101Component } from './modal1101.component';

describe('Modal1101Component', () => {
  let component: Modal1101Component;
  let fixture: ComponentFixture<Modal1101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1101Component]
    });
    fixture = TestBed.createComponent(Modal1101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
