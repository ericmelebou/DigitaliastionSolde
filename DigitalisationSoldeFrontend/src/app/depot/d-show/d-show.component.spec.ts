import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DShowComponent } from './d-show.component';

describe('DShowComponent', () => {
  let component: DShowComponent;
  let fixture: ComponentFixture<DShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DShowComponent]
    });
    fixture = TestBed.createComponent(DShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
