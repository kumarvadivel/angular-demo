import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeSelectionComponent } from './scheme-selection.component';

describe('SchemeSelectionComponent', () => {
  let component: SchemeSelectionComponent;
  let fixture: ComponentFixture<SchemeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
