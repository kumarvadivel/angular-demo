import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileNumberVerificationComponent } from './mobile-number-verification.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from 'projects/dlp-gold-loan/src/app/shared/services/utils/shared.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonCommonService } from 'projects/dlp-gold-loan/src/app/services/common-common.service';
import { LogicFunctions } from 'projects/dlp-gold-loan/src/app/shared/helpers/JsonLogic';
import { ArrayMethod } from 'projects/dlp-gold-loan/src/app/shared/helpers/ArrayMethods';
import { ActivatedRoute } from '@angular/router';

describe('MobileNumberVerificationComponent', () => {
  let component: MobileNumberVerificationComponent;
  let fixture: ComponentFixture<MobileNumberVerificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNumberVerificationComponent ],
      imports:[HttpClientModule, MatSnackBarModule],
      providers:[SharedService,CommonCommonService, LogicFunctions, ArrayMethod, ActivatedRoute]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNumberVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
