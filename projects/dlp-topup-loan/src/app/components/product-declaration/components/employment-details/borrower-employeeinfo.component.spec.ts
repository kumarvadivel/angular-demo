import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BorrowerEmployeeinfoComponent} from './borrower-employeeinfo.component';

describe('BorrowerEmployeeinfoComponent', () => {
    let component: BorrowerEmployeeinfoComponent;
    let fixture: ComponentFixture<BorrowerEmployeeinfoComponent>;
    beforeEach(waitForAsync()
=>
    {
        await TestBed.configureTestingModule({
            declarations: [BorrowerEmployeeinfoComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(BorrowerEmployeeinfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }
)
    ;
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
