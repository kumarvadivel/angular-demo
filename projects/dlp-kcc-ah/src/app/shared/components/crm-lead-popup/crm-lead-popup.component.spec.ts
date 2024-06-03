import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadPopupComponent } from './crm-lead-popup.component';

describe('CrmLeadPopupComponent', () => {
  let component: CrmLeadPopupComponent;
  let fixture: ComponentFixture<CrmLeadPopupComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
