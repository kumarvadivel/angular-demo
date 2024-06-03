import { Component, Input, OnInit } from '@angular/core';
import { LocalStorage } from '../../helpers/localStorage';
import { CommonCommonService } from '@kcc-ah-app/services/common-common.service';
import { CommonVariableService } from '@kcc-ah-app/services/common-variable-service';
@Component({
  selector: 'app-substepper',
  templateUrl: './substepper.component.html',
  styleUrls: ['./substepper.component.scss']
})
export class SubstepperComponent implements OnInit {
  substepperData: any;
  dispSubstepper: boolean = false;
    journey: any;
    constructor(public commonService:CommonCommonService,public commonVariableService:CommonVariableService,public localStorage: LocalStorage) { }
    ngOnInit() {
      this.journey = this.localStorage.SessionGetItem('CURRENT_JOURNEY'); 
      this.substepperData = this.fetchSubstepperData()
      this.dispSubstepper = this.substepperData[0]?.isCompleted;
    }
  
    fetchSubstepperData(){
      let stepperData= this.journey.metaData.stepperData
      let activeStep = stepperData.find(f=>f.isActive && !f.isCompleted)
      if(activeStep.subStep){
        return activeStep.subStep
      }else{
        return []
      }
    }
    @Input() stepperData;
  
  
  }