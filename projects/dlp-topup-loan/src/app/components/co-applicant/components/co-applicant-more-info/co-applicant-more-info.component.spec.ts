import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoApplicantMoreInfoComponent } from './co-applicant-more-info.component';

describe('CoApplicantMoreInfoComponent', () => {
  let component: CoApplicantMoreInfoComponent;
  let fixture: ComponentFixture<CoApplicantMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoApplicantMoreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoApplicantMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
