
import { Component, ElementRef, Input,  OnInit,  ViewChild } from "@angular/core";
import { ConfigurationService } from "@fd-app/services/configuration.service";
import { Chart, registerables } from "chart.js";  
Chart.register(...registerables);
 
@Component({
  selector: 'app-guage-chart',
  templateUrl: './guage-chart.component.html',
  styleUrls: ['./guage-chart.component.scss']
})
export class GuageChartComponent implements OnInit {
 
  @Input() config;
  @ViewChild("mycanvas")
  canvas: ElementRef;

  chart: any;
  totalEmi
  principalAmount: any;
  extraPaid: number;
  constructor(public service:ConfigurationService) {}
  public doughnutChartLabels = ["Principle Amount", "Interest Amount"];
  public doughnutChartData = [];
  //  public doughnutChartType: ChartType = 'doughnut';
  // public innerRadius = 70;
  public doughnutChartColors = [
    {
      backgroundColor: ["#0090E5", "#00C5AB"],
    },
  ];
  doughnutChartOptions = {
    tooltips: {
      enabled: false,
    },

  };
  chartConfig = {
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
    options: {
      legend: {
        display: true
      },
      tooltips:{
        enabled:false
      }
    }
  }
  guageConfig={
    type: null,
    data: {
      datasets: [
        { 
          value:0.5,
          minvalue:0,
          data: [],
          backgroundColor: ["#0090E5", "#00C5AB"],
        },
      ]
    },
    options: {
      legend: {
        display: true
      },
      tooltips:{
        enabled:false
      },
       // responsive: true,
       maintainAspectRatio: false,
       rotation: 270, // start angle in degrees
       circumference: 180, // sweep angle in degrees
       cutout: '80%',
    },
    valueLabel: {
      display: true,
      backgroundColor: [],
    }
  }

  ngOnInit(): void {
    if (this.config.chartType == "PIE_CHART") {
      this.chartConfig.type = "doughnut";
      this.config.data.map((dt) => {
        this.chartConfig.data.labels.push(dt.fieldLabel);
        this.chartConfig.data.datasets[0].data.push(dt.value);
        this.chartConfig.data.datasets[0].backgroundColor.push(dt.bgColor);
      });
      this.chart = new Chart("canvas", this.chartConfig);
    } else {
      this.guageConfig.type = "doughnut";
      
      this.chart = new Chart("canvas", this.guageConfig);
    }
    this.service.totalEmi.subscribe(data=>{
      this.totalEmi = this.formatAmount(data);
    }
    );
    this.service.principalAmount.subscribe(data=>{this.principalAmount = data;
      
   
        this.guageConfig.data.datasets[0].data[0]=Number(this.principalAmount);
        this.extraPaid = Number(this.totalEmi )+this.principalAmount;
        this.guageConfig.data.datasets[0].data[1]=Number(this.totalEmi);
        this.chart?.update();

    }

      );
  }

  ngAfterViewInit() {
    if (this.config) { 
      this.config.data.map((data) => {
        this.doughnutChartLabels.push(data.fieldLabel); 
      }); 
    }
  }
  formatAmount(data) { 
    return data.replace('₹ ', ""); 
  }
}

