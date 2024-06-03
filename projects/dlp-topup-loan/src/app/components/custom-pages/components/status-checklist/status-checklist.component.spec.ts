import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StatusChecklistComponent} from './status-checklist.component';

describe('StatusChecklistComponent', () => {
    let component: StatusChecklistComponent;
    let fixture: ComponentFixture<StatusChecklistComponent>;
    beforeEach(waitForAsync()
=>
    {
        await TestBed.configureTestingModule({
            declarations: [StatusChecklistComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(StatusChecklistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }
)
    ;
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
