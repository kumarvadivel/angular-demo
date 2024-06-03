import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionConfigurationConsoleComponent } from './page-section-configuration-console.component';

describe('PageSectionConfigurationConsoleComponent', () => {
  let component: PageSectionConfigurationConsoleComponent;
  let fixture: ComponentFixture<PageSectionConfigurationConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSectionConfigurationConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSectionConfigurationConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
