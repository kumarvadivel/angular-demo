import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBranchComponent } from './contact-branch.component';

describe('ContactBranchComponent', () => {
  let component: ContactBranchComponent;
  let fixture: ComponentFixture<ContactBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
