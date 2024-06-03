import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonVariableService } from '@el-app/services/common-variable-service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  page = 'basicInfo';
  completePercentage = 0;
  public stepWidth: any;
  initialStepperList = [];
  stepperList = [];
  mblCurStepCount: string;

  @Input() stepperData;
  @Input() options;
  @Input() updateStep: Observable<void>;
  constructor(public commonVariableService: CommonVariableService) {

  }

  ngOnInit(): void {
    this.initializeStepper()
  }

  ngOnChanges(): void {
    this.initializeStepper()
  }

  initializeStepper() {
    this.completePercentage = 0
    let stepW = Number(100 / this.stepperData.length);
    this.stepWidth = `${stepW}%`;
    this.stepperData.forEach(item => {
      if (item.subStep) {
        let substepW
        let subStepLegth = item.subStep.length + 1;
        if (subStepLegth % 2 != 0) {
          substepW = Number(100 / subStepLegth);
        }
        else {
          subStepLegth = item.subStep.length + 1
          substepW = Number(100 / subStepLegth);
        }
        let percentageperStep = Number(stepW / subStepLegth)
        item['subStepWidth'] = `${substepW}%`;
        let percentageinstep = 0
        item.subStep.forEach(then => {
          if (then.isActive) {
            percentageinstep = percentageinstep + 1
          }
        })
        this.completePercentage = this.completePercentage + Math.ceil(percentageperStep * percentageinstep)
      }
      this.mblViewStepDisp();
    });
  }

  getState(page) {
    let stage = 1;
    this.stepperList.forEach((item, i) => {
      if (item.name == page) {
        stage = i + 1;
      }
    });
    return stage;
  }
  mblViewStepDisp() {
    let count = this.stepperData.filter((x) => x.isCompleted === true).length + 1;
    this.mblCurStepCount = `Step ${count}/${this.stepperData.length}`;
    return this.mblCurStepCount
  }
}
