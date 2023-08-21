import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlayoutComponent } from './dlayout.component';

describe('DlayoutComponent', () => {
  let component: DlayoutComponent;
  let fixture: ComponentFixture<DlayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlayoutComponent]
    });
    fixture = TestBed.createComponent(DlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});