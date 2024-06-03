import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonLogicDescriberComponent } from './json-logic-describer.component';

describe('JsonLogicDescriberComponent', () => {
  let component: JsonLogicDescriberComponent;
  let fixture: ComponentFixture<JsonLogicDescriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonLogicDescriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonLogicDescriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
