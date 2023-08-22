import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLayoutComponent } from './d-layout.component';

describe('DLayoutComponent', () => {
  let component: DLayoutComponent;
  let fixture: ComponentFixture<DLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DLayoutComponent]
    });
    fixture = TestBed.createComponent(DLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
