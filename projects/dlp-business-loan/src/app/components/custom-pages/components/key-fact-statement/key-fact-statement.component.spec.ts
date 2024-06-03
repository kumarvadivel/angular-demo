import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFactStatementComponent } from './key-fact-statement.component';

describe('KeyFactStatementComponent', () => {
  let component: KeyFactStatementComponent;
  let fixture: ComponentFixture<KeyFactStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyFactStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyFactStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
