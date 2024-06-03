import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ErrorPtlexComponent} from './error-ptlex.component';

describe('ErrorPtlexComponent', () => {
    let component: ErrorPtlexComponent;
    let fixture: ComponentFixture<ErrorPtlexComponent>;
    beforeEach(waitForAsync()
=>
    {
        await TestBed.configureTestingModule({
            declarations: [ErrorPtlexComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ErrorPtlexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }
)
    ;
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
