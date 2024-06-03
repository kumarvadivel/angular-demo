import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, Subject } from 'rxjs';
import {MatDialog } from '@angular/material/dialog';

import { ConsentComponent } from './consent.component';
import { CommonCommonService } from '../../../services/common-common.service';
import { ApiService } from '../../../services/api.service';
import { CommonVariableService } from '../../../services/common-variable-service';

describe('ConsentComponent', () => {
  let component: ConsentComponent;
  let fixture: ComponentFixture<ConsentComponent>;

  let mockCommonService = {
    mySub: new Subject<any>()
  };

  let mockCommonVariableService = {
    isConsentValid: false
  };

  let mockApiService = {
    fetchConsentList: jasmine.createSpy('fetchConsentList').and.returnValue(of({ code: '200', loanPurposeTemplateList: [{}] }))
  };

  let mockDialogRef = {
    afterClosed: () => of(true)
  };

  let mockDialog = {
    open: () => mockDialogRef
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentComponent ],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
        { provide: CommonCommonService, useValue: mockCommonService },
        { provide: CommonVariableService, useValue: mockCommonVariableService },
        { provide: ApiService, useValue: mockApiService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentComponent);
    component = fixture.componentInstance;

    component.field = { options: [] };
    component.options = {};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind event listeners to window click event', () => {
    spyOn(window, 'addEventListener');
  
    component.bindconsentEventListeners();
  
    expect(window.addEventListener).toHaveBeenCalledWith('click', jasmine.any(Function));
  });
  

});
