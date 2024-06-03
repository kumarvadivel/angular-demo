import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAppEmpDetailsComponent } from './co-app-emp-details.component';

describe('CoAppEmpDetailsComponent', () => {
  let component: CoAppEmpDetailsComponent;
  let fixture: ComponentFixture<CoAppEmpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoAppEmpDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoAppEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
