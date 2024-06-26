import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionBuilderComponent } from './section-builder.component';

describe('SectionBuilderComponent', () => {
  let component: SectionBuilderComponent;
  let fixture: ComponentFixture<SectionBuilderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
