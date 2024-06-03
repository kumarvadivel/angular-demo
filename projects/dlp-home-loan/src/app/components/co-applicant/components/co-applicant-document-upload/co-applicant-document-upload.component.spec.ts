import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoApplicantDocumentUploadComponent } from './co-applicant-document-upload.component';

describe('CoApplicantDocumentUploadComponent', () => {
  let component: CoApplicantDocumentUploadComponent;
  let fixture: ComponentFixture<CoApplicantDocumentUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoApplicantDocumentUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoApplicantDocumentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
