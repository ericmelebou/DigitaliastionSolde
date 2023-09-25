import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1103EditComponent } from './modal1103-edit.component';

describe('Modal1103EditComponent', () => {
  let component: Modal1103EditComponent;
  let fixture: ComponentFixture<Modal1103EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1103EditComponent]
    });
    fixture = TestBed.createComponent(Modal1103EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
