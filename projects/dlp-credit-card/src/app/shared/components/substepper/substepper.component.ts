import { Component, Input, OnInit } from '@angular/core';
import { CommonCommonService } from '@cc-app/services/common-common.service';
import { CommonVariableService } from '@cc-app/services/common-variable-service';
import { LocalStorage } from '@cc-app/shared/helpers/localStorage';
@Component({
  selector: 'app-substepper',
  templateUrl: './substepper.component.html',
  styleUrls: ['./substepper.component.scss']
})
export class SubstepperComponent implements OnInit {
  substepperData: any;
  dispSubstepper: boolean = false;
  journey: any;
  constructor(public commonService: CommonCommonService, public commonVariableService: CommonVariableService, private localStorage: LocalStorage) { }
  ngOnInit() {
    this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY')
    this.substepperData = this.fetchSubstepperData()
    this.dispSubstepper = this.substepperData[0]?.isCompleted;
  }

  fetchSubstepperData() {
    let stepperData = this.journey.metaData.stepperData
    let activeStep = stepperData.find(f => f.isActive === true && f.isCompleted === false)
    if (activeStep.subStep) {
      return activeStep.subStep
    } else {
      return []
    }
  }
  @Input() stepperData;


}