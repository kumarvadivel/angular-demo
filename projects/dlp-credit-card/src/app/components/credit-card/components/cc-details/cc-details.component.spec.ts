import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcDetailsComponent } from './cc-details.component';

describe('CcDetailsComponent', () => {
  let component: CcDetailsComponent;
  let fixture: ComponentFixture<CcDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
