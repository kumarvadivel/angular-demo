import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AddNewItemPopupComponent} from './add-new-item-popup.component';

describe('AddNewItemPopupComponent', () => {
    let component: AddNewItemPopupComponent;
    let fixture: ComponentFixture<AddNewItemPopupComponent>;
    beforeEach(waitForAsync()
=>
    {
        await TestBed.configureTestingModule({
            declarations: [AddNewItemPopupComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AddNewItemPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }
)
    ;
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
