import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSequenceConfigurationConsoleComponent } from './page-sequence-configuration-console.component';

describe('PageSequenceConfigurationConsoleComponent', () => {
  let component: PageSequenceConfigurationConsoleComponent;
  let fixture: ComponentFixture<PageSequenceConfigurationConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSequenceConfigurationConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSequenceConfigurationConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
