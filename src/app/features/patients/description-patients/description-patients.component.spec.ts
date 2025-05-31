import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPatientsComponent } from './description-patients.component';

describe('DescriptionPatientsComponent', () => {
  let component: DescriptionPatientsComponent;
  let fixture: ComponentFixture<DescriptionPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionPatientsComponent]
    });
    fixture = TestBed.createComponent(DescriptionPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
