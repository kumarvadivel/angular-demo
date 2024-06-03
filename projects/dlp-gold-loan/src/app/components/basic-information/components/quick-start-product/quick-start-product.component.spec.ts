import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStartProductComponent } from './quick-start-product.component';

describe('QuickStartProductComponent', () => {
  let component: QuickStartProductComponent;
  let fixture: ComponentFixture<QuickStartProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickStartProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickStartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
