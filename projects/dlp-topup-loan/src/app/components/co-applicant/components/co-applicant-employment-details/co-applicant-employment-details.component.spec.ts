import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoApplicantEmploymentDetailsComponent } from './co-applicant-employment-details.component';

describe('CoApplicantEmploymentDetailsComponent', () => {
  let component: CoApplicantEmploymentDetailsComponent;
  let fixture: ComponentFixture<CoApplicantEmploymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoApplicantEmploymentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoApplicantEmploymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
