import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal3001EditComponent } from './modal3001-edit.component';

describe('Modal3001EditComponent', () => {
  let component: Modal3001EditComponent;
  let fixture: ComponentFixture<Modal3001EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal3001EditComponent]
    });
    fixture = TestBed.createComponent(Modal3001EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
