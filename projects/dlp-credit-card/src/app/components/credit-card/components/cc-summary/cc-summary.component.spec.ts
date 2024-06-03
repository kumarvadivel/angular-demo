import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcSummaryComponent } from './cc-summary.component';

describe('CcSummaryComponent', () => {
  let component: CcSummaryComponent;
  let fixture: ComponentFixture<CcSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
