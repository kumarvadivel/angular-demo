import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadScanDocComponent } from './upload-scan-doc.component';

describe('UploadScanDocComponent', () => {
  let component: UploadScanDocComponent;
  let fixture: ComponentFixture<UploadScanDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadScanDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadScanDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
