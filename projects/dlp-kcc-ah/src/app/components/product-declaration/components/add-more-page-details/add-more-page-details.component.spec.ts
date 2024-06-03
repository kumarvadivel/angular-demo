import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMorePageDetailsComponent } from './add-more-page-details.component';

describe('AddMorePageDetailsComponent', () => {
  let component: AddMorePageDetailsComponent;
  let fixture: ComponentFixture<AddMorePageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMorePageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMorePageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
