import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoApplicantDetailsComponent } from './co-applicant-details.component';

describe('CoApplicantDetailsComponent', () => {
  let component: CoApplicantDetailsComponent;
  let fixture: ComponentFixture<CoApplicantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoApplicantDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoApplicantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
