import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1107EditComponent } from './modal1107-edit.component';

describe('Modal1107EditComponent', () => {
  let component: Modal1107EditComponent;
  let fixture: ComponentFixture<Modal1107EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal1107EditComponent]
    });
    fixture = TestBed.createComponent(Modal1107EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
