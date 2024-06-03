import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EmiCalculatorComponent} from './emi-calculator.component';

describe('EmiCalculatorComponent', () => {
    let component: EmiCalculatorComponent;
    let fixture: ComponentFixture<EmiCalculatorComponent>;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EmiCalculatorComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EmiCalculatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
