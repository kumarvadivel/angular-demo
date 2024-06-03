import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { Subject } from 'rxjs';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  const mockUpdateChart = new Subject<void>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;

    // Mock input values
    component.config = {
      data: [
        { fieldLabel: 'Test 1', value: 10, bgColor: 'red' },
        { fieldLabel: 'Test 2', value: 20, bgColor: 'blue' }
      ]
    };
    component.updateChart = mockUpdateChart.asObservable();

    // Mock the canvas element
    component.canvas = {
      nativeElement: document.createElement('canvas')
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize chart on component initialization', () => {
    expect(component.chart).toBeTruthy();
  });

  it('should update chart data', () => {
    const labels = ['Test 1', 'Test 2'];
    const data = [10, 20];
    const bgColor = ['red', 'blue'];

    component.updateData();

    expect(component.chartConfig.data.labels).toEqual(labels);
    expect(component.chartConfig.data.datasets[0].data).toEqual(data);
    expect(component.chartConfig.data.datasets[0].backgroundColor).toEqual(bgColor);
  });

  it('should update chart data when observable emits', () => {
    const spy = spyOn(component, 'updateData');

    mockUpdateChart.next();

    expect(spy).toHaveBeenCalled();
  });
});
