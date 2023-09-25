import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2101EditComponent } from './modal2101-edit.component';

describe('Modal2101EditComponent', () => {
  let component: Modal2101EditComponent;
  let fixture: ComponentFixture<Modal2101EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal2101EditComponent]
    });
    fixture = TestBed.createComponent(Modal2101EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
