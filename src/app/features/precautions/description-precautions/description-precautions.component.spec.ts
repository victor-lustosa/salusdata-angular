import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPrecautionsComponent } from './description-precautions.component';

describe('DescriptionPrecautionsComponent', () => {
  let component: DescriptionPrecautionsComponent;
  let fixture: ComponentFixture<DescriptionPrecautionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionPrecautionsComponent]
    });
    fixture = TestBed.createComponent(DescriptionPrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
