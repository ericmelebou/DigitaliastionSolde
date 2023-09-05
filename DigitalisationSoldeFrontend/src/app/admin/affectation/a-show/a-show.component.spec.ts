import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AShowComponent } from './a-show.component';

describe('AShowComponent', () => {
  let component: AShowComponent;
  let fixture: ComponentFixture<AShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AShowComponent]
    });
    fixture = TestBed.createComponent(AShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
