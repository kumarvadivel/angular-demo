import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSummaryComponent } from './loan-summary.component';
import { ApiService } from '../../../../services/api.service';
import { CommonApiService } from '../../../../services/common-api.service';
import { SharedGlModule } from '../../../../shared/sharedGl.module'; 

describe('LoanSummaryComponent', () => {
  let component: LoanSummaryComponent;
  let fixture: ComponentFixture<LoanSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSummaryComponent ],
      providers:[ApiService,CommonApiService],
      imports:[SharedGlModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
