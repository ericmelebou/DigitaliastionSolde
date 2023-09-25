import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1104EditComponent } from './modal1104-edit.component';

describe('Modal1104EditComponent', () => {
  let component: Modal1104EditComponent;
  let fixture: ComponentFixture<Modal1104EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1104EditComponent]
    });
    fixture = TestBed.createComponent(Modal1104EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
