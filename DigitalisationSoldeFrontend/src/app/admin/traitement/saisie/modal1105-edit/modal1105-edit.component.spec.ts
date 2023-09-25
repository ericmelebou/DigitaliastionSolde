import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1105EditComponent } from './modal1105-edit.component';

describe('Modal1105EditComponent', () => {
  let component: Modal1105EditComponent;
  let fixture: ComponentFixture<Modal1105EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1105EditComponent]
    });
    fixture = TestBed.createComponent(Modal1105EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
