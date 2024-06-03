import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() config;
  @Input() percentage;
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
        legend: {
          display: true,
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              const label = data.labels[tooltipItem.index];
              const percentage = this.percentage[tooltipItem.index];
              return label + ": " + percentage;
            },
          },
        },
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
