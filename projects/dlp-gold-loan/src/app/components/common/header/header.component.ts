import { Component, Injector, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonCommonService } from "../../../services/common-common.service";
import { MatDialog } from "@angular/material/dialog";
import { ApiService } from "../../../services/api.service";
import { EnvironmentService } from "../../../../environments/environment.service";
import { PopupComponent } from "../../../shared/components/popup/popup.component";
import { InitializeJourneyService } from "../../../services/initialize-journey.service";
import { SubmitFlowApiService } from "../../../services/submit-flow-api.service";
import { IData } from "../../../interfaces/common.interface";
import { LocalStorage } from "../../../shared/helpers/localStorage";
import { CommonVariableService } from "../../../services/common-variable-service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public menu: IData[] = [];
  public subMenu = [];
  public selectedMenu = 0;
  public showMobileSideNav: boolean = false;
  public showmenu: boolean = false;
  public url = "";
  public isSowHeader: boolean;
  public showProductContentMenu = false;
  productListData: any;
  showProductTiles = false;
  headerproducts;
  journey;
  tabsData = [];
  dialog:MatDialog;
  submitFlowApiService:SubmitFlowApiService;
  commonCommonService:CommonCommonService;
  commonVaribleService:CommonVariableService;
  initializeJourneyService:InitializeJourneyService;
  constructor(
    private router: Router,
    public apiService: ApiService, 
    public environmentService: EnvironmentService,
    public localStorage: LocalStorage,
    private injector: Injector
  ) {
    this.initializeJourneyService = this.injector.get<InitializeJourneyService>(
      InitializeJourneyService
    );
    this.commonVaribleService = this.injector.get<CommonVariableService>(
      CommonVariableService
    );
    this.dialog = this.injector.get<MatDialog>(MatDialog);
    this.commonCommonService =
      this.injector.get<CommonCommonService>(CommonCommonService);
    this.submitFlowApiService =
      this.injector.get<SubmitFlowApiService>(SubmitFlowApiService);
    this.journey = this.commonCommonService.getJourney();
  }

  ngOnInit() {
    this.tabsData = this.journey?.["tabsData"];
    this.isSowHeader =
      this.commonVaribleService.appLayoutConfig.isShowJourneyHeader;
    this.url = this.router.routerState.snapshot.url;
    this.menu = this.commonVaribleService.homeMenu;
    this.navigateSubMenu(0);
  }

  public getRouterURL() {
    this.url = this.router.routerState.snapshot.url;
    return this.url.includes("landing");
  }

  navigateSubMenu(i) {
    this.menu.forEach((item, index) => {
      if (index == i) {
        item["showMenu"] = false;
        this.selectedMenu = i;
        this.subMenu = item.subMenu;
      }
    });
  }
  logoClick() {
    this.router.navigateByUrl("core/home").catch(console.error);
  }
  showSideNav() {
    this.showMobileSideNav = !this.showMobileSideNav;
  }
  showSubMenu() {
    this.showmenu = !this.showmenu;
  }
  goToActiveMenu(menu, item) {
    menu.forEach((s) => {
      if (s.name == item.name) {
        s.isActive = true;
      } else {
        s.isActive = false;
      }
    });
  }

  hoverAlignData(then) {
    if (then.isActive) {
      then.isHover = true;
      this.showProductContentMenu = true;
      this.productListData = then.subSection;
    } else {
      then.isHover = false;
      this.showProductContentMenu = false;
    }
  }

  getHelp() {
    this.dialog.open(PopupComponent, {
      width: "50%",
      height: "40%",
      disableClose: true,
      data: {
        title: "Get Help",
        popupContent: this.commonVaribleService.getHelpInfo,
      },
    });
  }

  resume() {
    this.router
      .navigateByUrl(
        "core/resume-journey/resume-application?category=resume-application"
      )
      .catch((err) => {
        console.error(err);
        // Handle the error as needed
      });
  }

  routeToHome() {
    this.commonCommonService.flushJourney();
  }

  initiateProduct(product) {
    if (product.productCode != null) {
      this.showProductTiles = false;
      this.showProductContentMenu = false;
      let findedproduct = this.commonVaribleService.loanProductInfo.find(
        (e) => e.productCode == product.productCode
      );
      if (findedproduct != null) {
        this.localStorage.SessionSetItem("SELECTED_PRODUCT", findedproduct.id);
        this.localStorage.SessionSetItem("SELECTED_LOAN_PRODUCT", findedproduct);
        this.initializeJourneyService.initializeJourney(findedproduct);
        this.submitFlowApiService.proceedJourney();
      }
    }
  }
}
