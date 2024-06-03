import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoApplicantPersonalDetailsComponent } from './co-applicant-personal-details.component';

describe('CoApplicantPersonalDetailsComponent', () => {
  let component: CoApplicantPersonalDetailsComponent;
  let fixture: ComponentFixture<CoApplicantPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoApplicantPersonalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoApplicantPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
