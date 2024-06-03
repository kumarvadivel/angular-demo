import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkycVerificationComponent } from './ekyc-verification.component';

describe('EkycVerificationComponent', () => {
  let component: EkycVerificationComponent;
  let fixture: ComponentFixture<EkycVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkycVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkycVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
