import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPreviewComponent } from './journey-preview.component';

describe('JourneyPreviewComponent', () => {
  let component: JourneyPreviewComponent;
  let fixture: ComponentFixture<JourneyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
