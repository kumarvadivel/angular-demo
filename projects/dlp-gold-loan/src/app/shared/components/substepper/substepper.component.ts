import { Component, Input, OnInit } from "@angular/core";
import { IJourney } from "../../../interfaces/journey.interface";
import { LocalStorage } from "../../../shared/helpers/localStorage";
@Component({
  selector: "app-substepper",
  templateUrl: "./substepper.component.html",
  styleUrls: ["./substepper.component.scss"],
})
export class SubstepperComponent implements OnInit {
  @Input("showDefault") showDefault = false;
  substepperData: any;
  dispSubstepper: boolean = false;
  journey: IJourney;
  constructor(public localStorage: LocalStorage) { }
  ngOnInit() {
    this.journey = this.localStorage.SessionGetItem("CURRENT_JOURNEY");
    this.substepperData = this.fetchSubstepperData();
    this.dispSubstepper = this.substepperData[0]?.isCompleted;
    if (this.showDefault) {
      this.substepperData[0].isCompleted = true;
      this.substepperData[0].isActive = true;
      this.dispSubstepper = true;
    }
  }

  fetchSubstepperData() {
    let stepperData = this.journey.metaData.stepperData;
    let activeStep = stepperData.find(
      (f) => f.isActive === true && f.isCompleted === false
    );
    if (activeStep.subStep) {
      return activeStep.subStep;
    } else {
      return [];
    }
  }
  @Input() stepperData;
}
