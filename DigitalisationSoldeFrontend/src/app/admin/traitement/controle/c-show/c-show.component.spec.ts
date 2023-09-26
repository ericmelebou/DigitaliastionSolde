import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CShowComponent } from './c-show.component';

describe('CShowComponent', () => {
  let component: CShowComponent;
  let fixture: ComponentFixture<CShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CShowComponent]
    });
    fixture = TestBed.createComponent(CShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
