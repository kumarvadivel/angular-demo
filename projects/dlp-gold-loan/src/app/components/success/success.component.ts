import { Component, OnInit } from "@angular/core";
import { CommonCommonService } from "../../services/common-common.service";
import { CommonVariableService } from "../../services/common-variable-service";
import { InitializeJourneyService } from "../../services/initialize-journey.service";
import { LocalStorage } from "../../shared/helpers/localStorage";

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
})
export class SuccessComponent implements OnInit {
  showloader = false;

  constructor( 
    public commonVariableService: CommonVariableService,
    public commonService: CommonCommonService,
    public initializeJourneyService: InitializeJourneyService,
    public localStorage: LocalStorage
  ) {}

  ngOnInit(): void {
    this.showloader = true;
    this.showloader = false;
    const product = {
      id: "gold-loan",
      code: "LA77",
      image: "assets/icons/loan4.png",
      name: "Agri Gold Loan",
      info: "Use Gold to unlock your Golden Future! Apply Now!",
      color: "#7C83FD",
      isActive: true,
      navigateToMicroserviceUrl: "gold-loan",
      configKey: "is_gl_enabled",
      isMicroService: true,
      navigateUrl: "/gold-loan/",
      url: "product/basicinfo/mobile-verify",
      showDescription: true,
      productCode: "LA77",
      productType: "GOLD_LOAN",
    };
    this.initializeJourneyService.initializeJourney(product);
  }
}
