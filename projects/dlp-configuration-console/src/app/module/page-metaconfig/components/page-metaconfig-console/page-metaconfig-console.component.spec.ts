import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMetaconfigConsoleComponent } from './page-metaconfig-console.component';

describe('PageMetaconfigConsoleComponent', () => {
  let component: PageMetaconfigConsoleComponent;
  let fixture: ComponentFixture<PageMetaconfigConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMetaconfigConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMetaconfigConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
