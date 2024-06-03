import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UdhyamRegistrationVerificationComponent } from './udhyam-registration-verification.component'; 
import { SharedGlModule } from '../../../../shared/sharedGl.module'; 

describe('UdhyamRegistrationVerificationComponent', () => {
  let component: UdhyamRegistrationVerificationComponent;
  let fixture: ComponentFixture<UdhyamRegistrationVerificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UdhyamRegistrationVerificationComponent ],
      imports:[SharedGlModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdhyamRegistrationVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
