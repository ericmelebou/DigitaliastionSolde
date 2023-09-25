import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VIndexComponent } from './v-index.component';

describe('VIndexComponent', () => {
  let component: VIndexComponent;
  let fixture: ComponentFixture<VIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VIndexComponent]
    });
    fixture = TestBed.createComponent(VIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
