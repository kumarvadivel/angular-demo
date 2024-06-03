import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkycProcessingComponent } from './vkyc-processing.component';

describe('VkycProcessingComponent', () => {
  let component: VkycProcessingComponent;
  let fixture: ComponentFixture<VkycProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VkycProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VkycProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
