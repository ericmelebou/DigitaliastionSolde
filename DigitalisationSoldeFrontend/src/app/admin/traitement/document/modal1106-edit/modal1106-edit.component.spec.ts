import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1106EditComponent } from './modal1106-edit.component';

describe('Modal1106EditComponent', () => {
  let component: Modal1106EditComponent;
  let fixture: ComponentFixture<Modal1106EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1106EditComponent]
    });
    fixture = TestBed.createComponent(Modal1106EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
