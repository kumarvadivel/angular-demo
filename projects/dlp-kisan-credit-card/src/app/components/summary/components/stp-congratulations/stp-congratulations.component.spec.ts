import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STPCongratulationsComponent } from './stp-congratulations.component';

describe('STPCongratulationsComponent', () => {
  let component: STPCongratulationsComponent;
  let fixture: ComponentFixture<STPCongratulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STPCongratulationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STPCongratulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
