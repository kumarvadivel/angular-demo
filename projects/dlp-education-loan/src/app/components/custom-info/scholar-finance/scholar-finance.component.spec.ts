import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarFinanceComponent } from './scholar-finance.component';

describe('ScholarFinanceComponent', () => {
  let component: ScholarFinanceComponent;
  let fixture: ComponentFixture<ScholarFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScholarFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
