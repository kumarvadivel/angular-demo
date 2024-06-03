import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreDialogComponent } from './know-more-dialog.component';

describe('KnowMoreDialogComponent', () => {
  let component: KnowMoreDialogComponent;
  let fixture: ComponentFixture<KnowMoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowMoreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
