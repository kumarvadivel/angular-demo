import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DynamicTabsComponent} from './dynamic-tabs.component';

describe('DynamicTabsComponent', () => {
    let component: DynamicTabsComponent;
    let fixture: ComponentFixture<DynamicTabsComponent>;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicTabsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
