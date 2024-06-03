import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorKycComponent } from './director-kyc.component';

describe('DirectorKycComponent', () => {
  let component: DirectorKycComponent;
  let fixture: ComponentFixture<DirectorKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
