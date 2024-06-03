import {Component, Input, OnInit} from '@angular/core';
import {CommonCommonService} from '@hl-app/services/common-common.service';
import {CommonVariableService} from '@hl-app/services/common-variable-service';

@Component({
    selector: 'app-substepper',
    templateUrl: './substepper.component.html',
    styleUrls: ['./substepper.component.scss']
})
export class SubstepperComponent implements OnInit {
    substepperData: any;
    dispSubstepper: boolean = false;
    journey: any;
    @Input() stepperData;

    constructor(public commonService: CommonCommonService, public commonVariableService: CommonVariableService) {
    }

    ngOnInit() {
        this.journey = this.commonService.getJourney()
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
}
