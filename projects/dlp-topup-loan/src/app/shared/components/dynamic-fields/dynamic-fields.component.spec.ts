import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DynamicFieldsComponent} from './dynamic-fields.component';

describe('DynamicFieldsComponent', () => {
    let component: DynamicFieldsComponent;
    let fixture: ComponentFixture<DynamicFieldsComponent>;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFieldsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicFieldsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
