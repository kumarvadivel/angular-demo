import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNumberVerificationComponent } from './account-number-verification.component';

describe('AccountNumberVerificationComponent', () => {
  let component: AccountNumberVerificationComponent;
  let fixture: ComponentFixture<AccountNumberVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountNumberVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountNumberVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
