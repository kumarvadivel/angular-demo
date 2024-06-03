import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrackStatusComponent } from './track-status.component';

describe('TrackStatusComponent', () => {
  let component: TrackStatusComponent;
  let fixture: ComponentFixture<TrackStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
