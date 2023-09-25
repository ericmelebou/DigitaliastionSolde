import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2021EditComponent } from './modal2021-edit.component';

describe('Modal2021EditComponent', () => {
  let component: Modal2021EditComponent;
  let fixture: ComponentFixture<Modal2021EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal2021EditComponent]
    });
    fixture = TestBed.createComponent(Modal2021EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
