import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2011EditComponent } from './modal2011-edit.component';

describe('Modal2011EditComponent', () => {
  let component: Modal2011EditComponent;
  let fixture: ComponentFixture<Modal2011EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modal2011EditComponent]
    });
    fixture = TestBed.createComponent(Modal2011EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
