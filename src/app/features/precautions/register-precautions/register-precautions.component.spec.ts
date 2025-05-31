import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPrecautionsComponent } from './register-precautions.component';

describe('RegisterPrecautionsComponent', () => {
  let component: RegisterPrecautionsComponent;
  let fixture: ComponentFixture<RegisterPrecautionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPrecautionsComponent]
    });
    fixture = TestBed.createComponent(RegisterPrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
