import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1101EditComponent } from './modal1101-edit.component';

describe('Modal1101EditComponent', () => {
  let component: Modal1101EditComponent;
  let fixture: ComponentFixture<Modal1101EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1101EditComponent]
    });
    fixture = TestBed.createComponent(Modal1101EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
