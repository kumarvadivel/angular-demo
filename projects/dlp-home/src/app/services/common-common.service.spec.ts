import { TestBed } from '@angular/core/testing';

import { CommonCommonService } from './common-common.service';

describe('CommonCommonService', () => {
  let service: CommonCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
