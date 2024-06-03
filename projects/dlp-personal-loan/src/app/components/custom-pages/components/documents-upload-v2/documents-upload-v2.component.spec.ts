import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DocumentsPTLEXComponent} from './documents-upload-v2.component';

describe('DocumentsPTLEXComponent', () => {
    let component: DocumentsPTLEXComponent;
    let fixture: ComponentFixture<DocumentsPTLEXComponent>;
    beforeEach(waitForAsync()
=>
    {
        await TestBed.configureTestingModule({
            declarations: [DocumentsPTLEXComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(DocumentsPTLEXComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }
)
    ;
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
