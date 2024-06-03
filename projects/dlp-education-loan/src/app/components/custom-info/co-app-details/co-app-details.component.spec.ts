import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAppDetailsComponent } from './co-app-details.component';

describe('CoAppDetailsComponent', () => {
  let component: CoAppDetailsComponent;
  let fixture: ComponentFixture<CoAppDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoAppDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoAppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
