import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionsPageComponent } from './precautions-page.component';

describe('PrecautionsPageComponent', () => {
  let component: PrecautionsPageComponent;
  let fixture: ComponentFixture<PrecautionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecautionsPageComponent]
    });
    fixture = TestBed.createComponent(PrecautionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
