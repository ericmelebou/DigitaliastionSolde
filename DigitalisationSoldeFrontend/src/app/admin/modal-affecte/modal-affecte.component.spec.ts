import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAffecteComponent } from './modal-affecte.component';

describe('ModalAffecteComponent', () => {
  let component: ModalAffecteComponent;
  let fixture: ComponentFixture<ModalAffecteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAffecteComponent]
    });
    fixture = TestBed.createComponent(ModalAffecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
