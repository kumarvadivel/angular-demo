import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubstepperComponent } from './substepper.component';

describe('SubstepperComponent', () => {
  let component: SubstepperComponent;
  let fixture: ComponentFixture<SubstepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
