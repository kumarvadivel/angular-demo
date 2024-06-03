import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { EnvironmentService } from '../../../../environments/environment.service';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let environmentService: EnvironmentService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [ EnvironmentService],
    })
  
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    environmentService = TestBed.inject(EnvironmentService);
    component.data=[{image:'image.png'}];
    environmentService.configData= {
      appConfig: {isEncryption: true} as any
  }
    fixture.detectChanges();
  }));

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize activeCarouselIndex as 0', () => {
    expect(component.config.activeCarouselIndex).toBe(0);
  });

  it('should clear interval on destroy', () => {
    const spy = spyOn(window, 'clearInterval');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });

  it('should set current carousel index', () => {
    const index = 1;
    component.setCurrentCarousel(index);
    expect(component.config.activeCarouselIndex).toBe(index);
  });

  it('should initialiseCarousel', (done) => {
    const delays = component.config.delays;
    component.data = [1, 2, 3]; // set data to have a length of 3
  
    component.initialiseCarousel();
    fixture.detectChanges();
  
    setTimeout(() => {
      expect(component.config.activeCarouselIndex).toBe(2); // After 5 seconds, index should be 1
      done();
    }, delays * 1000 + 1000); // wait for 6 seconds (delays + 1)
  }, 10000); // Here we increase the timeout to 10 seconds
  
});
