import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductSelectionComponent } from './product-selection.component';

describe('ProductSelectionComponent', () => {
  let component: ProductSelectionComponent;
  let fixture: ComponentFixture<ProductSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
