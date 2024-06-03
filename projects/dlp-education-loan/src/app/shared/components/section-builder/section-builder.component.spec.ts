import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBuilderComponent } from './section-builder.component';

describe('SectionBuilderComponent', () => {
  let component: SectionBuilderComponent;
  let fixture: ComponentFixture<SectionBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
