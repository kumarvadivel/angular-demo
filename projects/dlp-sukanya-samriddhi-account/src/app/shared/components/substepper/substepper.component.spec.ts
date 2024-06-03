import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstepperComponent } from './substepper.component';

describe('SubstepperComponent', () => {
  let component: SubstepperComponent;
  let fixture: ComponentFixture<SubstepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
