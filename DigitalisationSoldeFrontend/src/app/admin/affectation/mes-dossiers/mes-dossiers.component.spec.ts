import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDossiersComponent } from './mes-dossiers.component';

describe('MesDossiersComponent', () => {
  let component: MesDossiersComponent;
  let fixture: ComponentFixture<MesDossiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesDossiersComponent]
    });
    fixture = TestBed.createComponent(MesDossiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
