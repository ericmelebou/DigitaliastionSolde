import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1109EditComponent } from './modal1109-edit.component';

describe('Modal1109EditComponent', () => {
  let component: Modal1109EditComponent;
  let fixture: ComponentFixture<Modal1109EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1109EditComponent]
    });
    fixture = TestBed.createComponent(Modal1109EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
