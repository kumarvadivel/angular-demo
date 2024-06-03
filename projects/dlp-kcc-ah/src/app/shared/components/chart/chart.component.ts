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

  @Input() config
  @ViewChild('mycanvas')
  canvas:ElementRef; 
  chart: Chart;
  @Input() updateChart:Observable<void>;
  nodeid
  updateChartSubscription: any;
  constructor(private elementRef: ElementRef) {
    
   }

 chartConfig={
  type: null,
  data: {
    labels: [],
    datasets: [
      { 
        data: [],
        backgroundColor: [],
        fill: false
      },
    ]
  },
  
  responsive:true,
  options: {
    maintainAspectRatio: false,
    "responsive":true,
    
    legend: {
      display: true
    },
    tooltips:{
      enabled:false
    }
  }
}
  ngOnInit(): void {
    this.updateChartSubscription= this.updateChart.subscribe(()=>{
      this.updatedata()
    })
  }

  ngAfterContentInit() {
    this.chartConfig.type = 'doughnut'
    if (this.config.chartType == 'GAUGE') {
      this.chartConfig.options['rotation'] = 270
      this.chartConfig.options['circumference'] = 180
      this.chartConfig.options['cutout'] = '80%'
    }
    this.configMapping();
    this.chart = new Chart(this.elementRef.nativeElement.querySelector(`#canvas`), this.chartConfig);

  }

  updatedata(){
    this.chartConfig.type = 'doughnut'
    this.chartConfig.data.labels=[]
    this.chartConfig.data.datasets[0].data=[]
    this.chartConfig.data.datasets[0].backgroundColor=[]
    this.configMapping();
    this.chart.update()
  }

  configMapping(){
    this.config.data.map(dt => {
      this.chartConfig.data.labels.push(dt.fieldLabel)
      this.chartConfig.data.datasets[0].data.push(dt.value)
      this.chartConfig.data.datasets[0].backgroundColor.push(dt.bgColor)
    })
  }
}
