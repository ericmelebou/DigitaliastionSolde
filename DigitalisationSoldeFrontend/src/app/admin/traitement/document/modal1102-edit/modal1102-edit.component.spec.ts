import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1102EditComponent } from './modal1102-edit.component';

describe('Modal1102EditComponent', () => {
  let component: Modal1102EditComponent;
  let fixture: ComponentFixture<Modal1102EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1102EditComponent]
    });
    fixture = TestBed.createComponent(Modal1102EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
