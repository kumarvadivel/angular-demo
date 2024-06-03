import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmailIdVerificationComponent } from './email-id-verification.component';

describe('EmailIdVerificationComponent', () => {
  let component: EmailIdVerificationComponent;
  let fixture: ComponentFixture<EmailIdVerificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailIdVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailIdVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
