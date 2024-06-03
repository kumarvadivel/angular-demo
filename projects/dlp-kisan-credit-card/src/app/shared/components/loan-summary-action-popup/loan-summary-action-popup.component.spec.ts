import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSummaryActionPopupComponent } from './loan-summary-action-popup.component';

describe('LoanSummaryActionPopupComponent', () => {
  let component: LoanSummaryActionPopupComponent;
  let fixture: ComponentFixture<LoanSummaryActionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSummaryActionPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanSummaryActionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
