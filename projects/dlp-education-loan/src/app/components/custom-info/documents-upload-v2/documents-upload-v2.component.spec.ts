import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsUploadV2Component } from './documents-upload-v2.component';

describe('DocumentsUploadV2Component', () => {
  let component: DocumentsUploadV2Component;
  let fixture: ComponentFixture<DocumentsUploadV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsUploadV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsUploadV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
