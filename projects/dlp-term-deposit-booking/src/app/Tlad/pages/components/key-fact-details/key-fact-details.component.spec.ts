import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFactDetailsComponent } from './key-fact-details.component';

describe('KeyFactDetailsComponent', () => {
  let component: KeyFactDetailsComponent;
  let fixture: ComponentFixture<KeyFactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyFactDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyFactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
