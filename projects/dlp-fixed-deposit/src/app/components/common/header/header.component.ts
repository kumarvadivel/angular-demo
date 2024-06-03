import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {MatDialog } from '@angular/material/dialog'; 
import { ApiService } from '@fd-app/services/api.service';
import { CommonVariableService } from '@fd-app/services/common-variable-service';
import { CommonCommonService } from '@fd-app/services/common-common.service';
import { EnvironmentService } from '@fd-environments/environment.service';
import { LocalStorage } from '@fd-app/shared/helpers/LocalStorage';
import { PopupComponent } from '@fd-app/shared/components/popup/popup.component';
import { SubmitFlowApiService } from '@fd-app/services/submit-flow-api.service';
import { InitializeJourneyService } from '@fd-app/services/initialize-journey.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu = [];
  public subMenu = [];
  public selectedMenu = 0;
  public showMobileSideNav:boolean=false;
  public showmenu:boolean = false;
  public url="";
  public isSowHeader:boolean;
  public showProductContentMenu=false
  productListData: any;
  showProductTiles=false
  headerproducts;
  isHome = false;
  isResumeApplication=false;
  dialog:MatDialog;
  submitFlowApiService:SubmitFlowApiService;
  commonCommonService:CommonCommonService;
  commonVariableService:CommonVariableService;
  initializeJourneyService:InitializeJourneyService;
  constructor(
    private router: Router,
    public apiService: ApiService, 
    public environmentService: EnvironmentService,
    public localStorage: LocalStorage,
    private injector: Injector
  ) {
    this.initializeJourneyService = this.injector.get<InitializeJourneyService>(InitializeJourneyService);
    this.commonVariableService = this.injector.get<CommonVariableService>(CommonVariableService);
    this.dialog = this.injector.get<MatDialog>(MatDialog);
    this.commonCommonService = this.injector.get<CommonCommonService>(CommonCommonService);
    this.submitFlowApiService = this.injector.get<SubmitFlowApiService>(SubmitFlowApiService); 
  }

  ngOnInit() {
    this.isSowHeader = this.commonVariableService.appLayoutConfig.isShowJourneyHeader
    this.url = this.router.routerState.snapshot.url; 
    this.menu = this.commonVariableService.homeMenu;
    this.navigateSubMenu(0);
    this.checkRoute(); 
  }
  checkRoute() {
    this.isHome = (this.router.url === '/core/home');
    this.isResumeApplication = this.router.url.includes('resume-application')?true:false;
  }
  public getRouterURL() {
    this.url = this.router.routerState.snapshot.url;
    return this.url.includes("landing");
  }

  navigateSubMenu(i) {
    this.menu.forEach((item, index) => {
      if (index == i) {
        item.showMenu = false
        this.selectedMenu = i;
        this.subMenu = item.subMenu
      }
})
  }
  logoClick(){
    this.router.navigateByUrl(
      "core/home"
    ).catch(err => {
      console.error(err);
      // Handle the error as needed
  })
  }
  showSideNav(){
    this.showMobileSideNav=!this.showMobileSideNav
 }
 showSubMenu() {
 this.showmenu = !this.showmenu

 }
 goToActiveMenu(menu,item) {
 menu.forEach(s =>{
  if(s.name == item.name) {
    s.isActive = true
  }
  else{
    s.isActive = false
  }
 })
 }

 hoverAlignData(then){
  if(then.isActive){
    then.isHover=true
    this.showProductContentMenu=true
    this.productListData = then.subSection
  }else{
    then.isHover=false
    this.showProductContentMenu=false
  }
 }

 getHelp(){
  this.dialog.open(PopupComponent,{
    width: '50%',
    height: '40%',
    ariaLabel:"popup",
      role:"dialog",
    disableClose: true,
    data:{
      title:'Get Help',
      popupContent:this.commonVariableService.getHelpInfo
    }
  })
 }
 
 resume() {
  this.router.navigateByUrl('basic-info/mobile-number-verification?resumeJourney=true');
 }

 routeToHome(){
  this.commonCommonService.flushJourney()
 }

 initiateProduct(product) {
  if (product.productCode != null) {
    this.showProductTiles = false;
    this.showProductContentMenu = false;
    let findedproduct = this.commonVariableService.loanProductInfo.find(
      (e) => e.productCode == product.productCode
    );
    if (findedproduct != null) {
      this.localStorage.SessionSetItem(
        "SELECTED_PRODUCT",
        findedproduct.id
      );
      this.localStorage.SessionSetItem(
        "SELECTED_LOAN_PRODUCT",
        findedproduct
      );
      this.initializeJourneyService.initializeJourney(findedproduct);
      this.submitFlowApiService.proceedJourney();
    }
  }
}
}
