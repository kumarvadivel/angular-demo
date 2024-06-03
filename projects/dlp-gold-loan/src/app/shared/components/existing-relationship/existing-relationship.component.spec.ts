import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExistingRelationshipComponent } from './existing-relationship.component';

describe('ExistingRelationshipComponent', () => {
  let component: ExistingRelationshipComponent;
  let fixture: ComponentFixture<ExistingRelationshipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingRelationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
