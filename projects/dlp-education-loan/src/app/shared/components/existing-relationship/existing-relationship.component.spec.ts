import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingRelationshipComponent } from './existing-relationship.component';

describe('ExistingRelationshipComponent', () => {
  let component: ExistingRelationshipComponent;
  let fixture: ComponentFixture<ExistingRelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingRelationshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
