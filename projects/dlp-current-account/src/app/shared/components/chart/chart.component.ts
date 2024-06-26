import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {Chart,registerables} from 'chart.js';
import { Observable } from 'rxjs';
Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() config;
  @ViewChild("mycanvas") canvas: ElementRef<HTMLCanvasElement>; 
  chart: Chart;
  @Input() updateChart: Observable<void>;

  chartConfig: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.chartConfig = {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins:{
          legend: {
            display: true,
          },
          tooltip: {
            
            callbacks: {
              label: (tooltipItem) => {
                return tooltipItem.formattedValue+'%';
              },
            },
          },
        }        
      },
    };

    // Initialize Chart
    this.chart =  new Chart(this.elementRef.nativeElement.querySelector(`#canvas`),this.chartConfig );

    // Update Chart when observable emits
    this.updateChart.subscribe(() => this.updateData());
  }

  ngAfterViewInit() {
    this.updateData();
  }

  updateData() {
    this.chartConfig.data.labels = this.config.data.map(item => item.fieldLabel);
    this.chartConfig.data.datasets[0].data = this.config.data.map(item => item.value);
    this.chartConfig.data.datasets[0].backgroundColor = this.config.data.map(item => item.bgColor);
    this.chart.update();
  }
}
